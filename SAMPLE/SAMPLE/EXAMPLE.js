﻿var modulesFolder = FileSystemSync('Modules');var zip = require(modulesFolder.path + 'zip');var desktop = FileSystemSync('Desktop').path;var input = desktop + "sample";var output = desktop + "test.zip";var level = 0;//default, 1-9var ignoredotfile = true;var verbose = false;//zip.zip(input, output, level, ignoredotfile, verbose);input = output;output = desktop + "test";//zip.unzip(input, output, ignoredotfile, verbose);