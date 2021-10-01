export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Processador AMD Ryzen 5 5600x',
    price: 1800,
    description:
      'Processador AMD Ryzen 5 5600X Jogue com os melhores 6 núcleos incríveis para quem quer apenas jogar. Obtenha o desempenho de jogos de alta velocidade do melhor processador de desktop do mundo',
  },
  {
    id: 2,
    name: 'Placa-Mãe Asus ROG Strix X570',
    price: 3100,
    description:
      'A placa-mãe ROG Strix X570-E Gaming oferece a experiência ROG por excelência com uma combinação atraente de recursos e estilo inegável que fornecem a base ideal para a criação de um poderoso sistema de jogos ATX.',
  },
  {
    id: 3,
    name: 'Water Cooler NZXT Kraken Z73',
    price: 1400,
    description:
      'A Série Kraken X atualizada é essencial para qualquer construção, proporcionando melhor resfriamento, efeitos visuais impressionantes e instalação intuitiva. O novo Kraken X oferece uma experiência incrível em refrigeração líquida RGB.',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
