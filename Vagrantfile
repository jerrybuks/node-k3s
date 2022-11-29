# sets the default terminal
ENV["TERM"]="linux"

# set the minimum version for Vagrant
Vagrant.require_version ">= 2.2.10"
Vagrant.configure("2") do |config|
  config.vm.provision "shell",
    inline: "sudo su - && zypper update && zypper install -y apparmor-parser"

  # sets the image for the vagrant box
  config.vm.box = "opensuse/Leap-15.2.x86_64"
  # sets the image version
  config.vm.box_version = "15.2.31.632"

  # Forward the ports from the guest VM to the local host machine
  config.vm.network "forwarded_port", guest: 8080, host: 8080

  # sets the static IP for the vagrant box
  config.vm.network "private_network", ip: "192.168.0.196"
  

  # Configure the parameters for VirtualBox provider
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "4096"
    vb.cpus = 4
  end
end
