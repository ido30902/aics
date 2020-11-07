import os
from shutil import copyfile


def main():
    store_name = str(input("Enter your new store name: "))

    new_path = os.getcwd() + "/stores/"

    os.mkdir(new_path + store_name)

    html_file = open(new_path + store_name + "/index.html", "w")
    html_file.write("<!DOCTYPE html><html><head></head><body></body></html>")
    html_file.close()

if __name__ == "__main__":
    main()
