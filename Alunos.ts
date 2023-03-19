import { alunos } from "./alunosData";
import { writeFile } from 'fs/promises';
import { readFile } from 'fs/promises';

export class Alunos {
    private dataSource = alunos

    getDataSource() {
        return this.dataSource;
    }

    writeAlunos() {
        try {
            writeFile('alunosDataSource.json', JSON.stringify(this.dataSource));
        }
        catch(err) {
            console.error("Erro na escrita", err);
        }

    }

    async readAlunosDataSource() {
        const readAlunos = await readFile('alunosDataSource.json', 'utf-8');

        return readAlunos;
    }
}

