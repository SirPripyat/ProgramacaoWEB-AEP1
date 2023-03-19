import { Alunos } from "./Alunos";

async function main() {
    let alunos = new Alunos();

    // alunos.writeAlunos();

    const readed = await JSON.parse(await alunos.readAlunosDataSource());

    console.log("Listando alunos direto do arquivo",readed);
}

main();