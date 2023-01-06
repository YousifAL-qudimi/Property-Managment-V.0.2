from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in property_managment/__init__.py
from property_managment import __version__ as version

setup(
	name="property_managment",
	version=version,
	description="desc",
	author="m@gmail.com",
	author_email="m@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
