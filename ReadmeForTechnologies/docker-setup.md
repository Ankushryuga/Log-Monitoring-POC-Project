## First install docker.
1. update the sytem: sudo apt update

2. INstall few prerequesties packages : sudo apt install apt-transport-https ca-certificates curl software-properties-common

3. Add GPG key for offical Docker repo: curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

4. Add docker repo to APT source: sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

5. Make sure to install from docker repo: apt-cache policy docker-ce

6. Final Install Docker sudo apt install docker-ce

7. Check status: sudo systemctl status docker

7. 1. TO avoid using sudo every time add your username to docker group. sudo usermod -aG docker ${USER}

8. su - ${USER}

9. groups

10. sudo usermod -aG docker username


## Then Docker-Desktop : Set up Docker's apt repository.

# Add Docker's official GPG key:
1. sudo apt-get update
2. sudo apt-get install ca-certificates curl
3. sudo install -m 0755 -d /etc/apt/keyrings
4. sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
5. sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
6. echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

## Download docker-desktop .deb file

1. sudo apt-get update
2. sudo apt-get install ./docker-desktop-<version>-<arch>.deb


## IF you face KVM issue make virtual is enable for your system where you are running docker.
