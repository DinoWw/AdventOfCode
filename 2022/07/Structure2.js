class Folder{
    constructor(name){
        this.name = name;
        this.subFolders = [];
        this.files = [];
    }


    addSubFolder(item){
        if(!(item instanceof Folder)){
            throw "Tried adding non folder to subfolder list";
        }

        this.subFolders.push(item);
    }

    addFile(item){
        if(!(item instanceof File)){
            throw "Tried adding non file to file list";
        }

        this.files.push(item);
    }

    get size(){
        let size = 0;

        for(let file of this.files){
            size += file.size;
        }

        for(let folder of this.subFolders){
            size += folder.size;
        }

        //hardcoded, fuck u
        if(30000000 <= 70000000 - 44965705 + size){
            //yes, it really is this terrible
            deleteableFiles[this.name] = size;
            console.count()

        }
        console.log(this.name, size);

        return size;
    }


    execute(commandArray){
        for(let i = 0; i < commandArray.length; i++){
            //console.log(commandArray, "i", i);
            let command = commandArray[i];

            if(command == "$ cd .."){
                return commandArray.slice(i+1);
            }
            else if(command.startsWith("$ cd")){
                let addingFolder = new Folder(command.slice(5));
                commandArray = addingFolder.execute(commandArray.slice(i+1));
                i = -1;
                //console.log(commandArray, 0, i);
                this.addSubFolder(addingFolder);
            }
            else if(command == "$ ls"){
                for(; i + 1 < commandArray.length && !commandArray[i+1].startsWith("$"); i++){
                    //console.log(commandArray[i+1])
                    command = commandArray[i+1];
                    if(command.startsWith("dir")){
                        continue;
                    }
                    let fileData = command.split(" ");
                    this.addFile(new File(parseInt(fileData[0]), fileData[1]));
                }
                //i--;
            }
        }
        return [];
    }





}


class File{
    constructor(size, name){
        this.name = name;
        this.size = size;
    }


}


