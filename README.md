# How to install it

For a correct visualization of the project follow this step:

1. Install Composer by using the terminal:

		php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"

		php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"

		php composer-setup.php

		php -r "unlink('composer-setup.php');"
	
	Create a new composer.bat file alongside composer.phar:

	Using cmd.exe:

		C:\bin> echo @php "%~dp0composer.phar" %*>composer.bat
	
	Using PowerShell:

		PS C:\bin> Set-Content composer.bat '@php "%~dp0composer.phar" %*'

    For other information to install Composer see the
    [Composer documentation](https://https://getcomposer.org/).

2. Install the dependencies by running composer installer:

		composer install
		
3. Run php server:

        php -S localhost:8000