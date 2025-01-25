<template>
  <div class="sectionHardskills">
    <h1 class="titulosection">Hard skills</h1>
    <div class="containerHardskills">
      <div class="containercardsHardskills">
        <div class="Hardskills">
          <table>
            <thead>
              <tr>
                <th class="hardSkillsTitulo">Hard Skill </th>
                <th class="hardSkillsTitulo">Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="impar-tabela">HTML5 + CSS3</td>
                <td class="impar-tabela">Medium</td>
              </tr>
              <tr>
                <td class="par-tabela">Java Spring boot </td>
                <td class="par-tabela">Medium</td>
              </tr>
              <tr>
                <td class="impar-tabela">Java script</td>
                <td class="impar-tabela">Medium</td>
              </tr>
              <tr>
                <td class="par-tabela">Docker</td>
                <td class="par-tabela">Medium</td>
              </tr>
              <tr>
                <td class="impar-tabela">Linux server</td>
                <td class="impar-tabela">Standard</td>
              </tr>
              <tr>
                <td class="par-tabela">Vue</td>
                <td class="par-tabela">Easy</td>
              </tr>
              <tr>
                <td class="impar-tabela">React</td>
                <td class="impar-tabela">Easy</td>
              </tr>
              <tr>
                <td class="par-tabela">AWS</td>
                <td class="par-tabela">Standard</td>
              </tr>
              <tr>
                <td class="impar-tabela">Google clound</td>
                <td class="impar-tabela">Standard</td>
              </tr>
              <tr>
                <td class="par-tabela">Python</td>
                <td class="par-tabela">Medium</td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
.sectionHardskills {
  background: #000000;
  background-image: linear-gradient(to right, #000000, #000000);
}

.titulosection {
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.5));
}

.containercardsHardskills {
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  justify-content: center;

}

.Hardskills {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  width: 450px;
  background: #272727;;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.631));
  
}
.impar-tabela{
  color:#fff
}

table {
  width: 100%;
  border-collapse: collapse;
}

/* Estilo para o cabeçalho da tabela */
thead {
  background-color: #333;
  color: white;
}

/* Estilo para as células do cabeçalho */
.hardSkillsTitulo {
  padding: 12px;
  text-align: center;
}

/* Estilo para as células da tabela */
td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align:center; 
}

/* Estilo para as linhas pares da tabela */
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
