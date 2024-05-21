## Syntax for writing DockerFile and Format:

1. FROM:    from statement defines which image to download and start from. it must be the first command in your dockerfile. A docker file can have multiple FROM statements, which means dockerfile produces more than one image.
        FROM java: 8

2. MAINTAINER: it define the auther who is creating this dockerfile.
        MAINTAINER name


3. RUN:  it defines running a command through the shell, waiting for it to finish, and saving the result, it tells what process will be running inside the container at the run time.

        RUN unzip install.zip /opt/install
        RUN echo hello


4. ADD: It basically gives instructions to copy new files, directories, or remote file URLs and then add them to filesystem of the image.
etc.
