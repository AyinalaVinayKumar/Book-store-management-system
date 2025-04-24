import base64

with open('C:/Users/varun/.ssh/id_rsa', 'rb') as f:
    encoded = base64.b64encode(f.read())

with open('C:/Users/varun/id_rsa_base64.txt', 'wb') as f:
    f.write(encoded)
