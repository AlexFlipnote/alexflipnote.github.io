---
title: Create SSH Key
description: How to create a SSH Key and take usage of it
author: AlexFlipnote
---
# 0. Installing SSH Key
If you haven't already, you need to install **OpenSSH**. Linux should already come with it included, but for Windows users, download OpenSSH
with chocolately from this URL: [https://chocolatey.org/packages/openssh](https://chocolatey.org/packages/openssh)

# 1. Create a SSH Key
To create this key, you simply type the following command in cmd/terminal:<br>
`ssh-keygen -t rsa -b 4096`<br>
Follow the steps that the keygen provides, passphrase is optional.
When you're done with generating the key, you should have 2 new files in this directory:
```
Windows: C:\Users\USER\.ssh
Mac/Linux: ~/.ssh
```
id_rsa.pub = Public key<br>
id_rsa = Private key (Do NOT share this one to anyone!)

# 2. Make a server only accept SSH [ Advanced ]
NOTE: Enforcing your server to only accept SSH can be risky if you do mistakes, however, to ensure nothing wrong happens, never close the current SSH window to your server and always test your key with a new SSH session.

### 2.1 Adding SSH keys
When you've logged in to your server, do the following commands inside the home directory of your user choice:
```
chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```
When that's done, edit `~/.ssh/authorized_keys` file with nano/vim and add your Public key inside it.
If you're going to add more than one, be sure to split between keys, example:
```
LONG_KEY_1 LONG_KEY_1 LONG_KEY_1 LONG_KEY_1 LONG_KEY_1
LONG_KEY_2 LONG_KEY_2 LONG_KEY_2
LONG_KEY_3 LONG_KEY_3 LONG_KEY_3 LONG_KEY_3
```

### 2.2 Enforcing SSH Key only
Edit `/etc/ssh/sshd_config` with nano/vim and ensure that the following settings are set to these:
```md
- PermitRootLogin without-password
- RSAAuthentication yes
- PubkeyAuthentication yes
- PermitEmptyPasswords no
- PasswordAuthentication no
```
After such, reload sshd (Example: systemctl reload sshd) and test with **a new session** if the SSH key works.
If you can get in to your server without password, you've successfully completed it and ready to go.<br>
If it didn't work, then check what you did wrong above.

### Commands
Command to login with SSH Key:<br>
`ssh username@server.ip`

If you're on Windows and it doesn't work, try this:<br>
`ssh -m hmac-sha2-256 username@server.ip`
