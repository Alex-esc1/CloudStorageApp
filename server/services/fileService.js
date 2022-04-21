const fs = require('fs');
const File = require('../models/File');

class FileService {

    createDir(File) {
        return new Promise(((resolve, reject) => {
            try {

            } catch (e) {
                return reject ({message: "Ошибка файла!"})
            }
        }))
    }


}

module.exports = new FileService()