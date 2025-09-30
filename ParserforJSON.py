import pandas as pd
import json


def f(file_path):
    data = []
    with open(file_path, 'r') as f:
        for line in f:
            try:
                log_entry = json.loads(line)
                command = ''
                if "plan" in log_entry["@message"].lower():
                    command = "plan"
                elif "apply" in log_entry["@message"].lower():
                    command = "apply"
                data.append({
                    "level": f'[{log_entry["@level"]}]',
                    'timestamp': pd.to_datetime(log_entry['@timestamp']),
                    'command': command,
                    "tf_req_id": log_entry["tf_req_id"] if "tf_req_id" in log_entry else '',
                    'message': log_entry["@message"],
                    "row": log_entry
                })
            except json.JSONDecodeError:
                continue
    return pd.DataFrame(data)


a = [
    'Terraform Logs/1. plan_test-k801vip_tflog.json',
    'Terraform Logs/2. apply_test-k801vip_tflog.json',
    'Terraform Logs/3. apply_tflog.json',
    'Terraform Logs/4. tflog.json',
    'Terraform Logs/5. tflog.json'

]
for x in a:
    print(f(x))
