// Dados de referência clínicos do MedULTRA extraídos 1:1 do PDF/Imagens oficiais do projeto

export const medultraData = {
  sg: {
    title: 'Saco Gestacional (SG)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'PRIMEIRO TRIMESTRE',
    imageKey: 'medultra_sg.png',
    tableDesc: 'Tabela de Referência oficial relacionando o Diâmetro Médio do Saco Gestacional (DMSG) à Idade Gestacional estimada e Desvio Padrão.',
    tableHeaders: ['DMSG (mm)', 'Idade Gestacional', 'Desvio Padrão'],
    tableData: [
      { key: 2, val1: '2 mm', val2: '3 sem e 6 dias', dp: '7 dias' },
      { key: 3, val1: '3 mm', val2: '4 sem e 0 dias', dp: '7 dias' },
      { key: 4, val1: '4 mm', val2: '4 sem e 1 dia', dp: '7 dias' },
      { key: 5, val1: '5 mm', val2: '4 sem e 2 dias', dp: '7 dias' },
      { key: 6, val1: '6 mm', val2: '4 sem e 3 dias', dp: '7 dias' },
      { key: 7, val1: '7 mm', val2: '4 sem e 4 dias', dp: '7 dias' },
      { key: 8, val1: '8 mm', val2: '4 sem e 5 dias', dp: '7 dias' },
      { key: 9, val1: '9 mm', val2: '4 sem e 6 dias', dp: '7 dias' },
      { key: 10, val1: '10 mm', val2: '5 sem e 0 dias', dp: '7 dias' },
      { key: 11, val1: '11 mm', val2: '5 sem e 1 dia', dp: '7 dias' },
      { key: 12, val1: '12 mm', val2: '5 sem e 2 dias', dp: '7 dias' },
      { key: 13, val1: '13 mm', val2: '5 sem e 3 dias', dp: '7 dias' },
      { key: 14, val1: '14 mm', val2: '5 sem e 4 dias', dp: '7 dias' },
      { key: 15, val1: '15 mm', val2: '5 sem e 5 dias', dp: '8 dias' },
      { key: 16, val1: '16 mm', val2: '5 sem e 6 dias', dp: '8 dias' },
      { key: 17, val1: '17 mm', val2: '6 sem e 0 dias', dp: '8 dias' },
      { key: 18, val1: '18 mm', val2: '6 sem e 1 dia', dp: '8 dias' },
      { key: 19, val1: '19 mm', val2: '6 sem e 2 dias', dp: '8 dias' },
      { key: 20, val1: '20 mm', val2: '6 sem e 3 dias', dp: '8 dias' },
      { key: 21, val1: '21 mm', val2: '6 sem e 4 dias', dp: '11 dias' },
      { key: 22, val1: '22 mm', val2: '6 sem e 5 dias', dp: '11 dias' },
      { key: 23, val1: '23 mm', val2: '6 sem e 6 dias', dp: '11 dias' },
      { key: 24, val1: '24 mm', val2: '7 sem e 0 dias', dp: '11 dias' },
      { key: 25, val1: '25 mm', val2: '7 sem e 1 dia', dp: '11 dias' },
      { key: 26, val1: '26 mm', val2: '7 sem e 2 dias', dp: '11 dias' },
      { key: 27, val1: '27 mm', val2: '7 sem e 3 dias', dp: '12 dias' },
      { key: 28, val1: '28 mm', val2: '7 sem e 4 dias', dp: '12 dias' },
      { key: 29, val1: '29 mm', val2: '7 sem e 5 dias', dp: '12 dias' },
      { key: 30, val1: '30 mm', val2: '7 sem e 6 dias', dp: '12 dias' },
      { key: 31, val1: '31 mm', val2: '8 sem e 0 dias', dp: '12 dias' },
      { key: 32, val1: '32 mm', val2: '8 sem e 1 dia', dp: '12 dias' },
      { key: 33, val1: '33 mm', val2: '8 sem e 2 dias', dp: '13 dias' },
      { key: 34, val1: '34 mm', val2: '8 sem e 3 dias', dp: '13 dias' },
      { key: 35, val1: '35 mm', val2: '8 sem e 4 dias', dp: '13 dias' },
      { key: 36, val1: '36 mm', val2: '8 sem e 5 dias', dp: '13 dias' },
      { key: 37, val1: '37 mm', val2: '8 sem e 6 dias', dp: '13 dias' },
      { key: 38, val1: '38 mm', val2: '9 sem e 0 dias', dp: '13 dias' },
      { key: 39, val1: '39 mm', val2: '9 sem e 1 dia', dp: '13 dias' },
      { key: 40, val1: '40 mm', val2: '9 sem e 2 dias', dp: '13 dias' },
      { key: 41, val1: '41 mm', val2: '9 sem e 3 dias', dp: '14 dias' },
      { key: 42, val1: '42 mm', val2: '9 sem e 4 dias', dp: '14 dias' },
      { key: 43, val1: '43 mm', val2: '9 sem e 5 dias', dp: '14 dias' },
      { key: 44, val1: '44 mm', val2: '9 sem e 6 dias', dp: '14 dias' },
      { key: 45, val1: '45 mm', val2: '10 sem e 0 dias', dp: '14 dias' },
      { key: 46, val1: '46 mm', val2: '10 sem e 1 dia', dp: '14 dias' },
      { key: 47, val1: '47 mm', val2: '10 sem e 2 dias', dp: '14 dias' },
      { key: 48, val1: '48 mm', val2: '10 sem e 3 dias', dp: '14 dias' },
      { key: 49, val1: '49 mm', val2: '10 sem e 4 dias', dp: '14 dias' },
      { key: 50, val1: '50 mm', val2: '10 sem e 5 dias', dp: '14 dias' },
      { key: 51, val1: '51 mm', val2: '10 sem e 6 dias', dp: '14 dias' },
      { key: 52, val1: '52 mm', val2: '11 sem e 0 dias', dp: '14 dias' }
    ],
    points: [
      'O diâmetro médio do saco gestacional (DMSG) é calculado com a média aritmética dos três diâmetros ortogonais: longitudinal, anteroposterior e transverso do saco gestacional.',
      'O DMSG não deve ser utilizado para estimar a idade gestacional quando o embrião for visualizado em seu interior. (Neste caso, devemos usar o CCN para datação gestacional).',
      'A vesícula vitelínica deve ser visualizada obrigatoriamente quando o DMSG for >= 10mm.',
      'O embrião deve ser visualizado obrigatoriamente quando o DMSG for >= 25mm.'
    ],
    attention: 'O embrião deve ser visualizado quando o DMSG for >= 25mm para afastar hipótese de gravidez anembrionada.',
    techniqueTitle: 'Corte Transversal & Medição Ortogonal',
    techniqueDesc: 'Meça o saco gestacional de borda interna a borda interna do trofoblasto, excluindo o halo coriônico hiperecogênico em três eixos perpendiculares (longitudinal, anteroposterior e transversal).',
    scanningDetails: [
      { title: 'Corte transversal', desc: 'Identificar a cavidade uterina contendo o saco gestacional.' },
      { title: 'Diâmetro longitudinal (D1)', desc: 'Medida do maior eixo no plano sagital.' },
      { title: 'Diâmetro anteroposterior (D2)', desc: 'Medida perpendicular ao D1 no mesmo plano.' },
      { title: 'Diâmetro transversal (D3)', desc: 'Medida do maior eixo coronal no plano transverso.' }
    ]
  },
  vv: {
    title: 'Vesícula Vitelínica (VV)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'PRIMEIRO TRIMESTRE',
    imageKey: 'medultra_vv.png',
    tableDesc: 'Valores de normalidade do diâmetro da vesícula vitelínica (VV) versus idade gestacional (IG) em gestações típicas.',
    tableHeaders: ['IG (s+d)', 'Média (mm)', 'Limite Superior (mm)'],
    tableData: [
      { key: '4+3', val1: '4 sem e 3 dias', val2: '0.4 mm', dp: '2.0 mm' },
      { key: '4+4', val1: '4 sem e 4 dias', val2: '0.7 mm', dp: '2.2 mm' },
      { key: '4+5', val1: '4 sem e 5 dias', val2: '1.0 mm', dp: '2.5 mm' },
      { key: '4+6', val1: '4 sem e 6 dias', val2: '1.2 mm', dp: '2.7 mm' },
      { key: '5+0', val1: '5 sem e 0 dias', val2: '1.4 mm', dp: '2.9 mm' },
      { key: '5+1', val1: '5 sem e 1 dia', val2: '1.6 mm', dp: '3.1 mm' },
      { key: '5+2', val1: '5 sem e 2 dias', val2: '1.7 mm', dp: '3.2 mm' },
      { key: '5+3', val1: '5 sem e 3 dias', val2: '1.9 mm', dp: '3.4 mm' },
      { key: '5+4', val1: '5 sem e 4 dias', val2: '2.0 mm', dp: '3.6 mm' },
      { key: '5+5', val1: '5 sem e 5 dias', val2: '2.2 mm', dp: '3.7 mm' },
      { key: '5+6', val1: '5 sem e 6 dias', val2: '2.3 mm', dp: '3.8 mm' },
      { key: '6+0', val1: '6 sem e 0 dias', val2: '2.4 mm', dp: '3.9 mm' },
      { key: '6+1', val1: '6 sem e 1 dia', val2: '2.5 mm', dp: '4.0 mm' },
      { key: '6+2', val1: '6 sem e 2 dias', val2: '2.6 mm', dp: '4.1 mm' },
      { key: '6+3', val1: '6 sem e 3 dias', val2: '2.7 mm', dp: '4.2 mm' },
      { key: '6+4', val1: '6 sem e 4 dias', val2: '2.7 mm', dp: '4.2 mm' },
      { key: '6+5', val1: '6 sem e 5 dias', val2: '2.8 mm', dp: '4.3 mm' },
      { key: '6+6', val1: '6 sem e 6 dias', val2: '2.8 mm', dp: '4.3 mm' },
      { key: '7+0', val1: '7 sem e 0 dias', val2: '2.9 mm', dp: '4.4 mm' },
      { key: '7+1', val1: '7 sem e 1 dia', val2: '2.9 mm', dp: '4.4 mm' },
      { key: '7+2', val1: '7 sem e 2 dias', val2: '3.0 mm', dp: '4.5 mm' },
      { key: '7+3', val1: '7 sem e 3 dias', val2: '3.0 mm', dp: '4.5 mm' },
      { key: '7+4', val1: '7 sem e 4 dias', val2: '3.0 mm', dp: '4.6 mm' },
      { key: '7+5', val1: '7 sem e 5 dias', val2: '3.1 mm', dp: '4.6 mm' },
      { key: '7+6', val1: '7 sem e 6 dias', val2: '3.1 mm', dp: '4.6 mm' },
      { key: '8+0', val1: '8 sem e 0 dias', val2: '3.1 mm', dp: '4.6 mm' },
      { key: '8+1', val1: '8 sem e 1 dia', val2: '3.2 mm', dp: '4.7 mm' },
      { key: '8+2', val1: '8 sem e 2 dias', val2: '3.2 mm', dp: '4.7 mm' },
      { key: '8+3', val1: '8 sem e 3 dias', val2: '3.2 mm', dp: '4.7 mm' },
      { key: '8+4', val1: '8 sem e 4 dias', val2: '3.3 mm', dp: '4.8 mm' },
      { key: '8+5', val1: '8 sem e 5 dias', val2: '3.3 mm', dp: '4.8 mm' },
      { key: '8+6', val1: '8 sem e 6 dias', val2: '3.4 mm', dp: '4.9 mm' },
      { key: '9+0', val1: '9 sem e 0 dias', val2: '3.4 mm', dp: '4.9 mm' },
      { key: '9+1', val1: '9 sem e 1 dia', val2: '3.5 mm', dp: '5.0 mm' },
      { key: '9+2', val1: '9 sem e 2 dias', val2: '3.5 mm', dp: '5.0 mm' },
      { key: '9+3', val1: '9 sem e 3 dias', val2: '3.6 mm', dp: '5.1 mm' },
      { key: '9+4', val1: '9 sem e 4 dias', val2: '3.7 mm', dp: '5.2 mm' },
      { key: '9+5', val1: '9 sem e 5 dias', val2: '3.8 mm', dp: '5.3 mm' }
    ],
    points: [
      'A vesícula vitelínica é a primeira estrutura extra-embrionária detectada pela ultrassonografia transvaginal.',
      'Sua visualização no interior do saco gestacional é diagnóstica de uma gestação tópica (intrauterina).',
      'A vesícula vitelínica pode ser vista ativamente entre a 4.5ª e a 12ª semana de gestação.',
      'Aparece como uma estrutura esférica anecogênica com paredes finas ecogênicas dentro do saco gestacional.',
      'A medição de seu diâmetro interno deve ser realizada através da distância entre suas paredes internas (inner-to-inner).',
      'Como regra geral, seu diâmetro deve medir até 6 mm em uma gestação normal.'
    ],
    attention: 'Como regra geral a vesícula vitelínica deve medir até 6mm em uma gestação normal. Diâmetros > 6mm ou de aspecto calcificado/disforme estão associados a maior risco de perda gestacional.',
    techniqueTitle: 'Corte Transversal & Diâmetro Interno',
    techniqueDesc: 'Obtenha uma imagem nítida da vesícula vitelínica no maior plano. Posicione os calipers na parede interna superior e interna inferior (borda interna a borda interna), perpendicular ao maior diâmetro.',
    scanningDetails: [
      { title: 'Corte transversal', desc: 'Identificar a vesícula vitelínica livre no interior do saco gestacional.' },
      { title: 'Medição correta', desc: 'Borda interna a borda interna (inner-to-inner).' },
      { title: 'Limites de visibilidade', desc: 'Deve ser vista em DMSG >= 10mm transvaginal e >= 20mm transabdominal.' }
    ]
  },
  ccn: {
    title: 'Comprimento Cabeça-Nádega (CCN)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'PRIMEIRO TRIMESTRE',
    imageKey: 'medultra_ccn.png',
    tableDesc: 'Tabela de datação oficial por Comprimento Cabeça-Nádega (CCN) de 2mm a 84mm, relacionando-o à Idade Gestacional esperada e Desvio Padrão.',
    tableHeaders: ['CCN (mm)', 'Idade Gestacional', 'Desvio Padrão'],
    tableData: [
      {
            "key": 2,
            "val1": "2 mm",
            "val2": "5 sem e 5 dias",
            "dp": "3 dias",
            "weeks": 5,
            "days": 5,
            "dpVal": 3
      },
      {
            "key": 3,
            "val1": "3 mm",
            "val2": "5 sem e 6 dias",
            "dp": "3 dias",
            "weeks": 5,
            "days": 6,
            "dpVal": 3
      },
      {
            "key": 4,
            "val1": "4 mm",
            "val2": "6 sem e 1 dias",
            "dp": "3 dias",
            "weeks": 6,
            "days": 1,
            "dpVal": 3
      },
      {
            "key": 5,
            "val1": "5 mm",
            "val2": "6 sem e 2 dias",
            "dp": "3 dias",
            "weeks": 6,
            "days": 2,
            "dpVal": 3
      },
      {
            "key": 6,
            "val1": "6 mm",
            "val2": "6 sem e 3 dias",
            "dp": "3 dias",
            "weeks": 6,
            "days": 3,
            "dpVal": 3
      },
      {
            "key": 7,
            "val1": "7 mm",
            "val2": "6 sem e 4 dias",
            "dp": "3 dias",
            "weeks": 6,
            "days": 4,
            "dpVal": 3
      },
      {
            "key": 8,
            "val1": "8 mm",
            "val2": "6 sem e 5 dias",
            "dp": "3 dias",
            "weeks": 6,
            "days": 5,
            "dpVal": 3
      },
      {
            "key": 9,
            "val1": "9 mm",
            "val2": "6 sem e 6 dias",
            "dp": "3 dias",
            "weeks": 6,
            "days": 6,
            "dpVal": 3
      },
      {
            "key": 10,
            "val1": "10 mm",
            "val2": "7 sem e 1 dias",
            "dp": "3 dias",
            "weeks": 7,
            "days": 1,
            "dpVal": 3
      },
      {
            "key": 11,
            "val1": "11 mm",
            "val2": "7 sem e 2 dias",
            "dp": "3 dias",
            "weeks": 7,
            "days": 2,
            "dpVal": 3
      },
      {
            "key": 12,
            "val1": "12 mm",
            "val2": "7 sem e 3 dias",
            "dp": "3 dias",
            "weeks": 7,
            "days": 3,
            "dpVal": 3
      },
      {
            "key": 13,
            "val1": "13 mm",
            "val2": "7 sem e 4 dias",
            "dp": "3 dias",
            "weeks": 7,
            "days": 4,
            "dpVal": 3
      },
      {
            "key": 14,
            "val1": "14 mm",
            "val2": "7 sem e 5 dias",
            "dp": "3 dias",
            "weeks": 7,
            "days": 5,
            "dpVal": 3
      },
      {
            "key": 15,
            "val1": "15 mm",
            "val2": "7 sem e 6 dias",
            "dp": "3 dias",
            "weeks": 7,
            "days": 6,
            "dpVal": 3
      },
      {
            "key": 16,
            "val1": "16 mm",
            "val2": "8 sem e 0 dias",
            "dp": "3 dias",
            "weeks": 8,
            "days": 0,
            "dpVal": 3
      },
      {
            "key": 17,
            "val1": "17 mm",
            "val2": "8 sem e 1 dias",
            "dp": "3 dias",
            "weeks": 8,
            "days": 1,
            "dpVal": 3
      },
      {
            "key": 18,
            "val1": "18 mm",
            "val2": "8 sem e 2 dias",
            "dp": "3 dias",
            "weeks": 8,
            "days": 2,
            "dpVal": 3
      },
      {
            "key": 19,
            "val1": "19 mm",
            "val2": "8 sem e 3 dias",
            "dp": "3 dias",
            "weeks": 8,
            "days": 3,
            "dpVal": 3
      },
      {
            "key": 20,
            "val1": "20 mm",
            "val2": "8 sem e 4 dias",
            "dp": "4 dias",
            "weeks": 8,
            "days": 4,
            "dpVal": 4
      },
      {
            "key": 21,
            "val1": "21 mm",
            "val2": "8 sem e 5 dias",
            "dp": "4 dias",
            "weeks": 8,
            "days": 5,
            "dpVal": 4
      },
      {
            "key": 22,
            "val1": "22 mm",
            "val2": "8 sem e 6 dias",
            "dp": "4 dias",
            "weeks": 8,
            "days": 6,
            "dpVal": 4
      },
      {
            "key": 23,
            "val1": "23 mm",
            "val2": "9 sem e 0 dias",
            "dp": "4 dias",
            "weeks": 9,
            "days": 0,
            "dpVal": 4
      },
      {
            "key": 24,
            "val1": "24 mm",
            "val2": "9 sem e 1 dias",
            "dp": "4 dias",
            "weeks": 9,
            "days": 1,
            "dpVal": 4
      },
      {
            "key": 25,
            "val1": "25 mm",
            "val2": "9 sem e 2 dias",
            "dp": "4 dias",
            "weeks": 9,
            "days": 2,
            "dpVal": 4
      },
      {
            "key": 26,
            "val1": "26 mm",
            "val2": "9 sem e 3 dias",
            "dp": "4 dias",
            "weeks": 9,
            "days": 3,
            "dpVal": 4
      },
      {
            "key": 27,
            "val1": "27 mm",
            "val2": "9 sem e 4 dias",
            "dp": "4 dias",
            "weeks": 9,
            "days": 4,
            "dpVal": 4
      },
      {
            "key": 28,
            "val1": "28 mm",
            "val2": "9 sem e 4 dias",
            "dp": "4 dias",
            "weeks": 9,
            "days": 4,
            "dpVal": 4
      },
      {
            "key": 29,
            "val1": "29 mm",
            "val2": "9 sem e 5 dias",
            "dp": "4 dias",
            "weeks": 9,
            "days": 5,
            "dpVal": 4
      },
      {
            "key": 30,
            "val1": "30 mm",
            "val2": "9 sem e 6 dias",
            "dp": "4 dias",
            "weeks": 9,
            "days": 6,
            "dpVal": 4
      },
      {
            "key": 31,
            "val1": "31 mm",
            "val2": "10 sem e 0 dias",
            "dp": "5 dias",
            "weeks": 10,
            "days": 0,
            "dpVal": 5
      },
      {
            "key": 32,
            "val1": "32 mm",
            "val2": "10 sem e 1 dias",
            "dp": "5 dias",
            "weeks": 10,
            "days": 1,
            "dpVal": 5
      },
      {
            "key": 33,
            "val1": "33 mm",
            "val2": "10 sem e 1 dias",
            "dp": "5 dias",
            "weeks": 10,
            "days": 1,
            "dpVal": 5
      },
      {
            "key": 34,
            "val1": "34 mm",
            "val2": "10 sem e 2 dias",
            "dp": "5 dias",
            "weeks": 10,
            "days": 2,
            "dpVal": 5
      },
      {
            "key": 35,
            "val1": "35 mm",
            "val2": "10 sem e 3 dias",
            "dp": "5 dias",
            "weeks": 10,
            "days": 3,
            "dpVal": 5
      },
      {
            "key": 36,
            "val1": "36 mm",
            "val2": "10 sem e 4 dias",
            "dp": "5 dias",
            "weeks": 10,
            "days": 4,
            "dpVal": 5
      },
      {
            "key": 37,
            "val1": "37 mm",
            "val2": "10 sem e 4 dias",
            "dp": "5 dias",
            "weeks": 10,
            "days": 4,
            "dpVal": 5
      },
      {
            "key": 38,
            "val1": "38 mm",
            "val2": "10 sem e 5 dias",
            "dp": "5 dias",
            "weeks": 10,
            "days": 5,
            "dpVal": 5
      },
      {
            "key": 39,
            "val1": "39 mm",
            "val2": "10 sem e 6 dias",
            "dp": "5 dias",
            "weeks": 10,
            "days": 6,
            "dpVal": 5
      },
      {
            "key": 40,
            "val1": "40 mm",
            "val2": "10 sem e 6 dias",
            "dp": "5 dias",
            "weeks": 10,
            "days": 6,
            "dpVal": 5
      },
      {
            "key": 41,
            "val1": "41 mm",
            "val2": "11 sem e 0 dias",
            "dp": "5 dias",
            "weeks": 11,
            "days": 0,
            "dpVal": 5
      },
      {
            "key": 42,
            "val1": "42 mm",
            "val2": "11 sem e 1 dias",
            "dp": "5 dias",
            "weeks": 11,
            "days": 1,
            "dpVal": 5
      },
      {
            "key": 43,
            "val1": "43 mm",
            "val2": "11 sem e 1 dias",
            "dp": "5 dias",
            "weeks": 11,
            "days": 1,
            "dpVal": 5
      },
      {
            "key": 44,
            "val1": "44 mm",
            "val2": "11 sem e 1 dias",
            "dp": "5 dias",
            "weeks": 11,
            "days": 1,
            "dpVal": 5
      },
      {
            "key": 45,
            "val1": "45 mm",
            "val2": "11 sem e 2 dias",
            "dp": "5 dias",
            "weeks": 11,
            "days": 2,
            "dpVal": 5
      },
      {
            "key": 46,
            "val1": "46 mm",
            "val2": "11 sem e 3 dias",
            "dp": "5 dias",
            "weeks": 11,
            "days": 3,
            "dpVal": 5
      },
      {
            "key": 47,
            "val1": "47 mm",
            "val2": "11 sem e 3 dias",
            "dp": "6 dias",
            "weeks": 11,
            "days": 3,
            "dpVal": 6
      },
      {
            "key": 48,
            "val1": "48 mm",
            "val2": "11 sem e 4 dias",
            "dp": "6 dias",
            "weeks": 11,
            "days": 4,
            "dpVal": 6
      },
      {
            "key": 49,
            "val1": "49 mm",
            "val2": "11 sem e 5 dias",
            "dp": "6 dias",
            "weeks": 11,
            "days": 5,
            "dpVal": 6
      },
      {
            "key": 50,
            "val1": "50 mm",
            "val2": "11 sem e 5 dias",
            "dp": "6 dias",
            "weeks": 11,
            "days": 5,
            "dpVal": 6
      },
      {
            "key": 51,
            "val1": "51 mm",
            "val2": "11 sem e 6 dias",
            "dp": "6 dias",
            "weeks": 11,
            "days": 6,
            "dpVal": 6
      },
      {
            "key": 52,
            "val1": "52 mm",
            "val2": "11 sem e 6 dias",
            "dp": "6 dias",
            "weeks": 11,
            "days": 6,
            "dpVal": 6
      },
      {
            "key": 53,
            "val1": "53 mm",
            "val2": "12 sem e 0 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 0,
            "dpVal": 6
      },
      {
            "key": 54,
            "val1": "54 mm",
            "val2": "12 sem e 0 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 0,
            "dpVal": 6
      },
      {
            "key": 55,
            "val1": "55 mm",
            "val2": "12 sem e 1 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 1,
            "dpVal": 6
      },
      {
            "key": 56,
            "val1": "56 mm",
            "val2": "12 sem e 1 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 1,
            "dpVal": 6
      },
      {
            "key": 57,
            "val1": "57 mm",
            "val2": "12 sem e 2 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 2,
            "dpVal": 6
      },
      {
            "key": 58,
            "val1": "58 mm",
            "val2": "12 sem e 2 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 2,
            "dpVal": 6
      },
      {
            "key": 59,
            "val1": "59 mm",
            "val2": "12 sem e 3 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 3,
            "dpVal": 6
      },
      {
            "key": 60,
            "val1": "60 mm",
            "val2": "12 sem e 3 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 3,
            "dpVal": 6
      },
      {
            "key": 61,
            "val1": "61 mm",
            "val2": "12 sem e 4 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 4,
            "dpVal": 6
      },
      {
            "key": 62,
            "val1": "62 mm",
            "val2": "12 sem e 4 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 4,
            "dpVal": 6
      },
      {
            "key": 63,
            "val1": "63 mm",
            "val2": "12 sem e 5 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 5,
            "dpVal": 6
      },
      {
            "key": 64,
            "val1": "64 mm",
            "val2": "12 sem e 6 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 6,
            "dpVal": 6
      },
      {
            "key": 65,
            "val1": "65 mm",
            "val2": "12 sem e 6 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 6,
            "dpVal": 6
      },
      {
            "key": 66,
            "val1": "66 mm",
            "val2": "12 sem e 6 dias",
            "dp": "6 dias",
            "weeks": 12,
            "days": 6,
            "dpVal": 6
      },
      {
            "key": 67,
            "val1": "67 mm",
            "val2": "13 sem e 0 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 0,
            "dpVal": 6
      },
      {
            "key": 68,
            "val1": "68 mm",
            "val2": "13 sem e 1 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 1,
            "dpVal": 6
      },
      {
            "key": 69,
            "val1": "69 mm",
            "val2": "13 sem e 1 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 1,
            "dpVal": 6
      },
      {
            "key": 70,
            "val1": "70 mm",
            "val2": "13 sem e 1 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 1,
            "dpVal": 6
      },
      {
            "key": 71,
            "val1": "71 mm",
            "val2": "13 sem e 2 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 2,
            "dpVal": 6
      },
      {
            "key": 72,
            "val1": "72 mm",
            "val2": "13 sem e 3 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 3,
            "dpVal": 6
      },
      {
            "key": 73,
            "val1": "73 mm",
            "val2": "13 sem e 3 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 3,
            "dpVal": 6
      },
      {
            "key": 74,
            "val1": "74 mm",
            "val2": "13 sem e 3 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 3,
            "dpVal": 6
      },
      {
            "key": 75,
            "val1": "75 mm",
            "val2": "13 sem e 4 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 4,
            "dpVal": 6
      },
      {
            "key": 76,
            "val1": "76 mm",
            "val2": "13 sem e 5 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 5,
            "dpVal": 6
      },
      {
            "key": 77,
            "val1": "77 mm",
            "val2": "13 sem e 6 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 6,
            "dpVal": 6
      },
      {
            "key": 78,
            "val1": "78 mm",
            "val2": "13 sem e 6 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 6,
            "dpVal": 6
      },
      {
            "key": 79,
            "val1": "79 mm",
            "val2": "13 sem e 6 dias",
            "dp": "6 dias",
            "weeks": 13,
            "days": 6,
            "dpVal": 6
      },
      {
            "key": 80,
            "val1": "80 mm",
            "val2": "14 sem e 0 dias",
            "dp": "6 dias",
            "weeks": 14,
            "days": 0,
            "dpVal": 6
      },
      {
            "key": 81,
            "val1": "81 mm",
            "val2": "14 sem e 1 dias",
            "dp": "6 dias",
            "weeks": 14,
            "days": 1,
            "dpVal": 6
      },
      {
            "key": 82,
            "val1": "82 mm",
            "val2": "14 sem e 1 dias",
            "dp": "6 dias",
            "weeks": 14,
            "days": 1,
            "dpVal": 6
      },
      {
            "key": 83,
            "val1": "83 mm",
            "val2": "14 sem e 1 dias",
            "dp": "6 dias",
            "weeks": 14,
            "days": 1,
            "dpVal": 6
      },
      {
            "key": 84,
            "val1": "84 mm",
            "val2": "14 sem e 2 dias",
            "dp": "6 dias",
            "weeks": 14,
            "days": 2,
            "dpVal": 6
      }
],
    points: [
      'O comprimento cabeça-nádega (CCN) é o melhor parâmetro para determinar a idade gestacional no 1° trimestre e deve ser usado sempre que possível.',
      'Entre a 12ª e a 14ª semana o CCN e o diâmetro biparietal são similares em acurácia para datar a idade gestacional. Recomenda-se que o CCN seja usado até 84 mm e o diâmetro biparietal usado para medidas de CCN > 84 mm.',
      'Quando a idade gestacional baseada no CCN tiver uma diferença de até 7 dias daquela calculada pela DUM, consideramos que a DUM é confiável para fins de datação.',
      'A atividade cardíaca deve estar presente em embriões com CCN >= 7 mm.'
    ],
    attention: 'A atividade cardíaca embrionária deve ser obrigatoriamente visualizada quando o CCN for >= 7 mm para confirmar a viabilidade gestacional.',
    techniqueTitle: 'Medida Correta do CCN',
    techniqueDesc: 'Obtenha um corte sagital mediano do feto em posição neutra. A imagem deve ser ampliada de forma que o feto preencha a maior parte da tela. Posicione os calipers na borda externa da pele da região cranial (cabeça) e caudal (nádega).',
    scanningDetails: [
      { title: 'Magnificação ideal', desc: 'O feto deve preencher quase toda a tela de ultrassom.' },
      { title: 'Corte sagital mediano', desc: 'Perfil do feto mostrando osso nasal, diencéfalo e o plano caudal na mesma imagem.' },
      { title: 'Posição neutra', desc: 'O pescoço fetal não deve estar fletido ou defletido. Deve haver líquido visível entre o queixo e o tórax.' },
      { title: 'Borda externa da pele', desc: 'Medir da borda externa da calota craniana até o limite externo do polo caudal (calipers on-to-on).' }
    ]
  },
  fce: {
    title: 'Frequência Cardíaca (FCE)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'PRIMEIRO TRIMESTRE',
    imageKey: 'medultra_fce.png',
    tableDesc: 'Normalidade da Frequência Cardíaca Embrionária (FCE) em batimentos por minuto (bpm) versus o Comprimento Cabeça-Nádega (CCN) em milímetros.',
    tableHeaders: ['CCN (mm)', 'FCE Média (50th)', 'Percentis (5th - 95th)'],
    tableData: [
      {
            "key": 1,
            "val1": "1 mm",
            "val2": "99 bpm",
            "dp": "P5: 85 / P95: 113 bpm",
            "p5": 85,
            "p50": 99,
            "p95": 113
      },
      {
            "key": 2,
            "val1": "2 mm",
            "val2": "104 bpm",
            "dp": "P5: 90 / P95: 119 bpm",
            "p5": 90,
            "p50": 104,
            "p95": 119
      },
      {
            "key": 3,
            "val1": "3 mm",
            "val2": "109 bpm",
            "dp": "P5: 94 / P95: 125 bpm",
            "p5": 94,
            "p50": 109,
            "p95": 125
      },
      {
            "key": 4,
            "val1": "4 mm",
            "val2": "114 bpm",
            "dp": "P5: 99 / P95: 130 bpm",
            "p5": 99,
            "p50": 114,
            "p95": 130
      },
      {
            "key": 5,
            "val1": "5 mm",
            "val2": "119 bpm",
            "dp": "P5: 104 / P95: 135 bpm",
            "p5": 104,
            "p50": 119,
            "p95": 135
      },
      {
            "key": 6,
            "val1": "6 mm",
            "val2": "124 bpm",
            "dp": "P5: 108 / P95: 140 bpm",
            "p5": 108,
            "p50": 124,
            "p95": 140
      },
      {
            "key": 7,
            "val1": "7 mm",
            "val2": "129 bpm",
            "dp": "P5: 113 / P95: 145 bpm",
            "p5": 113,
            "p50": 129,
            "p95": 145
      },
      {
            "key": 8,
            "val1": "8 mm",
            "val2": "133 bpm",
            "dp": "P5: 117 / P95: 150 bpm",
            "p5": 117,
            "p50": 133,
            "p95": 150
      },
      {
            "key": 9,
            "val1": "9 mm",
            "val2": "137 bpm",
            "dp": "P5: 121 / P95: 155 bpm",
            "p5": 121,
            "p50": 137,
            "p95": 155
      },
      {
            "key": 10,
            "val1": "10 mm",
            "val2": "141 bpm",
            "dp": "P5: 125 / P95: 159 bpm",
            "p5": 125,
            "p50": 141,
            "p95": 159
      },
      {
            "key": 11,
            "val1": "11 mm",
            "val2": "145 bpm",
            "dp": "P5: 128 / P95: 163 bpm",
            "p5": 128,
            "p50": 145,
            "p95": 163
      },
      {
            "key": 12,
            "val1": "12 mm",
            "val2": "149 bpm",
            "dp": "P5: 132 / P95: 167 bpm",
            "p5": 132,
            "p50": 149,
            "p95": 167
      },
      {
            "key": 13,
            "val1": "13 mm",
            "val2": "152 bpm",
            "dp": "P5: 135 / P95: 171 bpm",
            "p5": 135,
            "p50": 152,
            "p95": 171
      },
      {
            "key": 14,
            "val1": "14 mm",
            "val2": "156 bpm",
            "dp": "P5: 138 / P95: 174 bpm",
            "p5": 138,
            "p50": 156,
            "p95": 174
      },
      {
            "key": 15,
            "val1": "15 mm",
            "val2": "159 bpm",
            "dp": "P5: 141 / P95: 177 bpm",
            "p5": 141,
            "p50": 159,
            "p95": 177
      },
      {
            "key": 16,
            "val1": "16 mm",
            "val2": "161 bpm",
            "dp": "P5: 144 / P95: 180 bpm",
            "p5": 144,
            "p50": 161,
            "p95": 180
      },
      {
            "key": 17,
            "val1": "17 mm",
            "val2": "164 bpm",
            "dp": "P5: 146 / P95: 183 bpm",
            "p5": 146,
            "p50": 164,
            "p95": 183
      },
      {
            "key": 18,
            "val1": "18 mm",
            "val2": "166 bpm",
            "dp": "P5: 148 / P95: 185 bpm",
            "p5": 148,
            "p50": 166,
            "p95": 185
      },
      {
            "key": 19,
            "val1": "19 mm",
            "val2": "168 bpm",
            "dp": "P5: 150 / P95: 187 bpm",
            "p5": 150,
            "p50": 168,
            "p95": 187
      },
      {
            "key": 20,
            "val1": "20 mm",
            "val2": "170 bpm",
            "dp": "P5: 151 / P95: 189 bpm",
            "p5": 151,
            "p50": 170,
            "p95": 189
      },
      {
            "key": 21,
            "val1": "21 mm",
            "val2": "171 bpm",
            "dp": "P5: 153 / P95: 190 bpm",
            "p5": 153,
            "p50": 171,
            "p95": 190
      },
      {
            "key": 22,
            "val1": "22 mm",
            "val2": "172 bpm",
            "dp": "P5: 154 / P95: 192 bpm",
            "p5": 154,
            "p50": 172,
            "p95": 192
      },
      {
            "key": 23,
            "val1": "23 mm",
            "val2": "173 bpm",
            "dp": "P5: 154 / P95: 192 bpm",
            "p5": 154,
            "p50": 173,
            "p95": 192
      },
      {
            "key": 24,
            "val1": "24 mm",
            "val2": "173 bpm",
            "dp": "P5: 155 / P95: 193 bpm",
            "p5": 155,
            "p50": 173,
            "p95": 193
      },
      {
            "key": 25,
            "val1": "25 mm",
            "val2": "174 bpm",
            "dp": "P5: 155 / P95: 193 bpm",
            "p5": 155,
            "p50": 174,
            "p95": 193
      },
      {
            "key": 26,
            "val1": "26 mm",
            "val2": "174 bpm",
            "dp": "P5: 155 / P95: 193 bpm",
            "p5": 155,
            "p50": 174,
            "p95": 193
      },
      {
            "key": 27,
            "val1": "27 mm",
            "val2": "173 bpm",
            "dp": "P5: 155 / P95: 193 bpm",
            "p5": 155,
            "p50": 173,
            "p95": 193
      },
      {
            "key": 28,
            "val1": "28 mm",
            "val2": "173 bpm",
            "dp": "P5: 154 / P95: 192 bpm",
            "p5": 154,
            "p50": 173,
            "p95": 192
      },
      {
            "key": 29,
            "val1": "29 mm",
            "val2": "172 bpm",
            "dp": "P5: 153 / P95: 191 bpm",
            "p5": 153,
            "p50": 172,
            "p95": 191
      },
      {
            "key": 30,
            "val1": "30 mm",
            "val2": "170 bpm",
            "dp": "P5: 152 / P95: 190 bpm",
            "p5": 152,
            "p50": 170,
            "p95": 190
      },
      {
            "key": 31,
            "val1": "31 mm",
            "val2": "169 bpm",
            "dp": "P5: 151 / P95: 188 bpm",
            "p5": 151,
            "p50": 169,
            "p95": 188
      },
      {
            "key": 32,
            "val1": "32 mm",
            "val2": "167 bpm",
            "dp": "P5: 149 / P95: 186 bpm",
            "p5": 149,
            "p50": 167,
            "p95": 186
      },
      {
            "key": 33,
            "val1": "33 mm",
            "val2": "165 bpm",
            "dp": "P5: 147 / P95: 184 bpm",
            "p5": 147,
            "p50": 165,
            "p95": 184
      },
      {
            "key": 34,
            "val1": "34 mm",
            "val2": "163 bpm",
            "dp": "P5: 145 / P95: 182 bpm",
            "p5": 145,
            "p50": 163,
            "p95": 182
      },
      {
            "key": 35,
            "val1": "35 mm",
            "val2": "160 bpm",
            "dp": "P5: 142 / P95: 179 bpm",
            "p5": 142,
            "p50": 160,
            "p95": 179
      },
      {
            "key": 36,
            "val1": "36 mm",
            "val2": "157 bpm",
            "dp": "P5: 140 / P95: 176 bpm",
            "p5": 140,
            "p50": 157,
            "p95": 176
      },
      {
            "key": 37,
            "val1": "37 mm",
            "val2": "154 bpm",
            "dp": "P5: 137 / P95: 173 bpm",
            "p5": 137,
            "p50": 154,
            "p95": 173
      },
      {
            "key": 38,
            "val1": "38 mm",
            "val2": "151 bpm",
            "dp": "P5: 134 / P95: 169 bpm",
            "p5": 134,
            "p50": 151,
            "p95": 169
      },
      {
            "key": 39,
            "val1": "39 mm",
            "val2": "147 bpm",
            "dp": "P5: 130 / P95: 165 bpm",
            "p5": 130,
            "p50": 147,
            "p95": 165
      },
      {
            "key": 40,
            "val1": "40 mm",
            "val2": "144 bpm",
            "dp": "P5: 127 / P95: 161 bpm",
            "p5": 127,
            "p50": 144,
            "p95": 161
      }
],
    points: [
      'A frequência cardíaca embrionária (FCE) deve ser calculada em batimentos por minuto (bpm).',
      'A FCE é obtida como a distância entre dois pontos equidistantes medida entre dois batimentos cardíacos consecutivos em uma imagem em modo M.',
      'A bradicardia embrionária é definida como uma FC < 100 bpm antes de 6.2 semanas (CCN de cerca de 4 mm) e < 120 bpm entre 6.3-7 semanas de gestação (CCN de cerca de 9 mm).',
      'A taquicardia embrionária é definida como uma FC > 135 bpm antes de 6.2 semanas e > 155 bpm entre 6.3-7 semanas de gestação.',
      'O aumento precoce na FCE coincide com o desenvolvimento morfológico do coração e sua subsequente diminuição resulta da maturação do sistema nervoso parassimpático.'
    ],
    attention: 'Valores de FCE fora dos limites de percentis 5 e 95 em fases precoces da gestação estão correlacionados a prognósticos desfavoráveis ou risco aumentado de perda gestacional iminente.',
    techniqueTitle: 'Medição de FCE em Modo M',
    techniqueDesc: 'Utilize o modo M na ultrassonografia transvaginal. Posicione a linha de cursor do M-mode através do batimento cardíaco do embrião. Meça o ciclo completo entre dois batimentos consecutivos.',
    scanningDetails: [
      { title: 'Modo de imagem', desc: 'Ativar o modo M (M-Mode) para evitar exposição excessiva do embrião ao Doppler pulsado no primeiro trimestre.' },
      { title: 'Posicionamento do caliper', desc: 'Medir o ciclo cardíaco completo entre dois picos consecutivos.' },
      { title: 'Frequência normal', desc: 'A FCE aumenta rapidamente no início da gestação, atingindo pico por volta de 9 semanas (até 170-180 bpm) antes de estabilizar.' }
    ]
  },
  tn: {
    title: 'Translucência Nucal (TN)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'PRIMEIRO TRIMESTRE',
    imageKey: 'medultra_tn.png',
    tableDesc: 'Valores de normalidade da espessura da Translucência Nucal (TN) em milímetros versus o Comprimento Cabeça-Nádega (CCN) de 45mm a 84mm.',
    tableHeaders: ['CCN (mm)', 'Média (50th)', 'Percentis (5th - 95th)'],
    tableData: [
      {
            "key": 45,
            "val1": "45 mm",
            "val2": "1.14 mm",
            "dp": "P5: 0.79 / P95: 1.64 mm",
            "p5": 0.79,
            "p50": 1.14,
            "p95": 1.64
      },
      {
            "key": 46,
            "val1": "46 mm",
            "val2": "1.17 mm",
            "dp": "P5: 0.81 / P95: 1.67 mm",
            "p5": 0.81,
            "p50": 1.17,
            "p95": 1.67
      },
      {
            "key": 47,
            "val1": "47 mm",
            "val2": "1.20 mm",
            "dp": "P5: 0.83 / P95: 1.71 mm",
            "p5": 0.83,
            "p50": 1.2,
            "p95": 1.71
      },
      {
            "key": 48,
            "val1": "48 mm",
            "val2": "1.23 mm",
            "dp": "P5: 0.85 / P95: 1.75 mm",
            "p5": 0.85,
            "p50": 1.23,
            "p95": 1.75
      },
      {
            "key": 49,
            "val1": "49 mm",
            "val2": "1.26 mm",
            "dp": "P5: 0.87 / P95: 1.79 mm",
            "p5": 0.87,
            "p50": 1.26,
            "p95": 1.79
      },
      {
            "key": 50,
            "val1": "50 mm",
            "val2": "1.29 mm",
            "dp": "P5: 0.89 / P95: 1.83 mm",
            "p5": 0.89,
            "p50": 1.29,
            "p95": 1.83
      },
      {
            "key": 51,
            "val1": "51 mm",
            "val2": "1.33 mm",
            "dp": "P5: 0.91 / P95: 1.87 mm",
            "p5": 0.91,
            "p50": 1.33,
            "p95": 1.87
      },
      {
            "key": 52,
            "val1": "52 mm",
            "val2": "1.36 mm",
            "dp": "P5: 0.94 / P95: 1.91 mm",
            "p5": 0.94,
            "p50": 1.36,
            "p95": 1.91
      },
      {
            "key": 53,
            "val1": "53 mm",
            "val2": "1.39 mm",
            "dp": "P5: 0.96 / P95: 1.96 mm",
            "p5": 0.96,
            "p50": 1.39,
            "p95": 1.96
      },
      {
            "key": 54,
            "val1": "54 mm",
            "val2": "1.42 mm",
            "dp": "P5: 0.98 / P95: 1.99 mm",
            "p5": 0.98,
            "p50": 1.42,
            "p95": 1.99
      },
      {
            "key": 55,
            "val1": "55 mm",
            "val2": "1.45 mm",
            "dp": "P5: 1.00 / P95: 2.04 mm",
            "p5": 1.0,
            "p50": 1.45,
            "p95": 2.04
      },
      {
            "key": 56,
            "val1": "56 mm",
            "val2": "1.48 mm",
            "dp": "P5: 1.03 / P95: 2.09 mm",
            "p5": 1.03,
            "p50": 1.48,
            "p95": 2.09
      },
      {
            "key": 57,
            "val1": "57 mm",
            "val2": "1.51 mm",
            "dp": "P5: 1.05 / P95: 2.12 mm",
            "p5": 1.05,
            "p50": 1.51,
            "p95": 2.12
      },
      {
            "key": 58,
            "val1": "58 mm",
            "val2": "1.54 mm",
            "dp": "P5: 1.07 / P95: 2.16 mm",
            "p5": 1.07,
            "p50": 1.54,
            "p95": 2.16
      },
      {
            "key": 59,
            "val1": "59 mm",
            "val2": "1.57 mm",
            "dp": "P5: 1.09 / P95: 2.19 mm",
            "p5": 1.09,
            "p50": 1.57,
            "p95": 2.19
      },
      {
            "key": 60,
            "val1": "60 mm",
            "val2": "1.60 mm",
            "dp": "P5: 1.11 / P95: 2.23 mm",
            "p5": 1.11,
            "p50": 1.6,
            "p95": 2.23
      },
      {
            "key": 61,
            "val1": "61 mm",
            "val2": "1.63 mm",
            "dp": "P5: 1.13 / P95: 2.27 mm",
            "p5": 1.13,
            "p50": 1.63,
            "p95": 2.27
      },
      {
            "key": 62,
            "val1": "62 mm",
            "val2": "1.65 mm",
            "dp": "P5: 1.15 / P95: 2.30 mm",
            "p5": 1.15,
            "p50": 1.65,
            "p95": 2.3
      },
      {
            "key": 63,
            "val1": "63 mm",
            "val2": "1.68 mm",
            "dp": "P5: 1.17 / P95: 2.34 mm",
            "p5": 1.17,
            "p50": 1.68,
            "p95": 2.34
      },
      {
            "key": 64,
            "val1": "64 mm",
            "val2": "1.70 mm",
            "dp": "P5: 1.19 / P95: 2.37 mm",
            "p5": 1.19,
            "p50": 1.7,
            "p95": 2.37
      },
      {
            "key": 65,
            "val1": "65 mm",
            "val2": "1.73 mm",
            "dp": "P5: 1.21 / P95: 2.40 mm",
            "p5": 1.21,
            "p50": 1.73,
            "p95": 2.4
      },
      {
            "key": 66,
            "val1": "66 mm",
            "val2": "1.75 mm",
            "dp": "P5: 1.22 / P95: 2.43 mm",
            "p5": 1.22,
            "p50": 1.75,
            "p95": 2.43
      },
      {
            "key": 67,
            "val1": "67 mm",
            "val2": "1.77 mm",
            "dp": "P5: 1.24 / P95: 2.46 mm",
            "p5": 1.24,
            "p50": 1.77,
            "p95": 2.46
      },
      {
            "key": 68,
            "val1": "68 mm",
            "val2": "1.79 mm",
            "dp": "P5: 1.26 / P95: 2.49 mm",
            "p5": 1.26,
            "p50": 1.79,
            "p95": 2.49
      },
      {
            "key": 69,
            "val1": "69 mm",
            "val2": "1.81 mm",
            "dp": "P5: 1.28 / P95: 2.51 mm",
            "p5": 1.28,
            "p50": 1.81,
            "p95": 2.51
      },
      {
            "key": 70,
            "val1": "70 mm",
            "val2": "1.83 mm",
            "dp": "P5: 1.30 / P95: 2.55 mm",
            "p5": 1.3,
            "p50": 1.83,
            "p95": 2.55
      },
      {
            "key": 71,
            "val1": "71 mm",
            "val2": "1.85 mm",
            "dp": "P5: 1.31 / P95: 2.57 mm",
            "p5": 1.31,
            "p50": 1.85,
            "p95": 2.57
      },
      {
            "key": 72,
            "val1": "72 mm",
            "val2": "1.87 mm",
            "dp": "P5: 1.32 / P95: 2.60 mm",
            "p5": 1.32,
            "p50": 1.87,
            "p95": 2.6
      },
      {
            "key": 73,
            "val1": "73 mm",
            "val2": "1.88 mm",
            "dp": "P5: 1.33 / P95: 2.62 mm",
            "p5": 1.33,
            "p50": 1.88,
            "p95": 2.62
      },
      {
            "key": 74,
            "val1": "74 mm",
            "val2": "1.89 mm",
            "dp": "P5: 1.33 / P95: 2.65 mm",
            "p5": 1.33,
            "p50": 1.89,
            "p95": 2.65
      },
      {
            "key": 75,
            "val1": "75 mm",
            "val2": "1.91 mm",
            "dp": "P5: 1.34 / P95: 2.67 mm",
            "p5": 1.34,
            "p50": 1.91,
            "p95": 2.67
      },
      {
            "key": 76,
            "val1": "76 mm",
            "val2": "1.92 mm",
            "dp": "P5: 1.36 / P95: 2.68 mm",
            "p5": 1.36,
            "p50": 1.92,
            "p95": 2.68
      },
      {
            "key": 77,
            "val1": "77 mm",
            "val2": "1.93 mm",
            "dp": "P5: 1.37 / P95: 2.69 mm",
            "p5": 1.37,
            "p50": 1.93,
            "p95": 2.69
      },
      {
            "key": 78,
            "val1": "78 mm",
            "val2": "1.93 mm",
            "dp": "P5: 1.37 / P95: 2.70 mm",
            "p5": 1.37,
            "p50": 1.93,
            "p95": 2.7
      },
      {
            "key": 79,
            "val1": "79 mm",
            "val2": "1.94 mm",
            "dp": "P5: 1.38 / P95: 2.71 mm",
            "p5": 1.38,
            "p50": 1.94,
            "p95": 2.71
      },
      {
            "key": 80,
            "val1": "80 mm",
            "val2": "1.94 mm",
            "dp": "P5: 1.38 / P95: 2.71 mm",
            "p5": 1.38,
            "p50": 1.94,
            "p95": 2.71
      },
      {
            "key": 81,
            "val1": "81 mm",
            "val2": "1.94 mm",
            "dp": "P5: 1.39 / P95: 2.71 mm",
            "p5": 1.39,
            "p50": 1.94,
            "p95": 2.71
      },
      {
            "key": 82,
            "val1": "82 mm",
            "val2": "1.95 mm",
            "dp": "P5: 1.39 / P95: 2.71 mm",
            "p5": 1.39,
            "p50": 1.95,
            "p95": 2.71
      },
      {
            "key": 83,
            "val1": "83 mm",
            "val2": "1.95 mm",
            "dp": "P5: 1.39 / P95: 2.71 mm",
            "p5": 1.39,
            "p50": 1.95,
            "p95": 2.71
      },
      {
            "key": 84,
            "val1": "84 mm",
            "val2": "1.95 mm",
            "dp": "P5: 1.39 / P95: 2.71 mm",
            "p5": 1.39,
            "p50": 1.95,
            "p95": 2.71
      }
],
    points: [
      'A translucência nucal (TN) é a espessura do espaço anecogênico subcutâneo na região posterior do pescoço fetal.',
      'A medida da TN é o principal marcador ultrassonográfico de rastreamento para síndrome de Down (Trissomia 21) e outras aneuploidias, bem como malformações cardíacas estruturais.',
      'O rastreamento da TN deve ser realizado estritamente quando o CCN estiver entre 45 mm e 84 mm (IG de aproximadamente 11 semanas a 13 semanas e 6 dias).',
      'O desvio padrão e percentis são ajustados de acordo com o CCN exato do feto.'
    ],
    attention: 'Uma medida de TN >= 2.5 mm ou acima do percentil 95 para o CCN correspondente deve ser considerada um achado alterado, exigindo aconselhamento genético e exames confirmatórios.',
    techniqueTitle: 'Corte Sagital Mediano & Calipers On-to-On',
    techniqueDesc: 'Obtenha um corte sagital mediano do feto em posição neutra. A imagem deve ser ampliada de forma que o feto preencha 75% da tela. Posicione os calipers nas bordas internas (on-to-on) no maior espaço anecogênico.',
    scanningDetails: [
      { title: 'Magnificação adequada', desc: 'O feto deve preencher 75% da tela, mostrando apenas cabeça e tórax superior.' },
      { title: 'Corte sagital mediano', desc: 'Perfil do feto mostrando osso nasal, diencéfalo e ausência de processos maxilares na linha média.' },
      { title: 'Posição neutra', desc: 'Evitar flexão ou deflexão excessiva da cabeça (deve haver espaço líquido entre o queixo e o tórax).' },
      { title: 'Calipers internos (On-to-On)', desc: 'Colocar a cruz do caliper exatamente sobre a linha que define a borda interna da pele e a borda externa da membrana nucal.' }
    ]
  },
  dbp_cc: {
    title: 'Diâmetro Biparietal (DBP)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'SEGUNDO E TERCEIRO TRIMESTRES',
    imageKey: 'medultra_dbp_cc.png',
    tableDesc: 'Tabela de datação por Diâmetro Biparietal (DBP) em milímetros, relacionando-o à Idade Gestacional esperada e Desvio Padrão.',
    tableHeaders: ['DBP (mm)', 'Idade Gestacional', 'Desvio Padrão'],
    tableData: [
      {
            "key": 14,
            "val1": "14 mm",
            "val2": "11 sem e 6 dias",
            "dp": "9 dias",
            "weeks": 11,
            "days": 6,
            "dpVal": 9
      },
      {
            "key": 15,
            "val1": "15 mm",
            "val2": "12 sem e 1 dias",
            "dp": "9 dias",
            "weeks": 12,
            "days": 1,
            "dpVal": 9
      },
      {
            "key": 16,
            "val1": "16 mm",
            "val2": "12 sem e 2 dias",
            "dp": "9 dias",
            "weeks": 12,
            "days": 2,
            "dpVal": 9
      },
      {
            "key": 17,
            "val1": "17 mm",
            "val2": "12 sem e 3 dias",
            "dp": "9 dias",
            "weeks": 12,
            "days": 3,
            "dpVal": 9
      },
      {
            "key": 18,
            "val1": "18 mm",
            "val2": "12 sem e 5 dias",
            "dp": "9 dias",
            "weeks": 12,
            "days": 5,
            "dpVal": 9
      },
      {
            "key": 19,
            "val1": "19 mm",
            "val2": "13 sem e 0 dias",
            "dp": "9 dias",
            "weeks": 13,
            "days": 0,
            "dpVal": 9
      },
      {
            "key": 20,
            "val1": "20 mm",
            "val2": "13 sem e 1 dias",
            "dp": "9 dias",
            "weeks": 13,
            "days": 1,
            "dpVal": 9
      },
      {
            "key": 21,
            "val1": "21 mm",
            "val2": "13 sem e 3 dias",
            "dp": "9 dias",
            "weeks": 13,
            "days": 3,
            "dpVal": 9
      },
      {
            "key": 22,
            "val1": "22 mm",
            "val2": "13 sem e 4 dias",
            "dp": "9 dias",
            "weeks": 13,
            "days": 4,
            "dpVal": 9
      },
      {
            "key": 23,
            "val1": "23 mm",
            "val2": "13 sem e 6 dias",
            "dp": "9 dias",
            "weeks": 13,
            "days": 6,
            "dpVal": 9
      },
      {
            "key": 24,
            "val1": "24 mm",
            "val2": "14 sem e 1 dias",
            "dp": "9 dias",
            "weeks": 14,
            "days": 1,
            "dpVal": 9
      },
      {
            "key": 25,
            "val1": "25 mm",
            "val2": "14 sem e 2 dias",
            "dp": "9 dias",
            "weeks": 14,
            "days": 2,
            "dpVal": 9
      },
      {
            "key": 26,
            "val1": "26 mm",
            "val2": "14 sem e 4 dias",
            "dp": "9 dias",
            "weeks": 14,
            "days": 4,
            "dpVal": 9
      },
      {
            "key": 27,
            "val1": "27 mm",
            "val2": "14 sem e 6 dias",
            "dp": "9 dias",
            "weeks": 14,
            "days": 6,
            "dpVal": 9
      },
      {
            "key": 28,
            "val1": "28 mm",
            "val2": "15 sem e 0 dias",
            "dp": "9 dias",
            "weeks": 15,
            "days": 0,
            "dpVal": 9
      },
      {
            "key": 29,
            "val1": "29 mm",
            "val2": "15 sem e 1 dias",
            "dp": "9 dias",
            "weeks": 15,
            "days": 1,
            "dpVal": 9
      },
      {
            "key": 30,
            "val1": "30 mm",
            "val2": "15 sem e 3 dias",
            "dp": "9 dias",
            "weeks": 15,
            "days": 3,
            "dpVal": 9
      },
      {
            "key": 31,
            "val1": "31 mm",
            "val2": "15 sem e 5 dias",
            "dp": "9 dias",
            "weeks": 15,
            "days": 5,
            "dpVal": 9
      },
      {
            "key": 32,
            "val1": "32 mm",
            "val2": "16 sem e 0 dias",
            "dp": "9 dias",
            "weeks": 16,
            "days": 0,
            "dpVal": 9
      },
      {
            "key": 33,
            "val1": "33 mm",
            "val2": "16 sem e 2 dias",
            "dp": "9 dias",
            "weeks": 16,
            "days": 2,
            "dpVal": 9
      },
      {
            "key": 34,
            "val1": "34 mm",
            "val2": "16 sem e 4 dias",
            "dp": "9 dias",
            "weeks": 16,
            "days": 4,
            "dpVal": 9
      },
      {
            "key": 35,
            "val1": "35 mm",
            "val2": "16 sem e 6 dias",
            "dp": "9 dias",
            "weeks": 16,
            "days": 6,
            "dpVal": 9
      },
      {
            "key": 36,
            "val1": "36 mm",
            "val2": "17 sem e 0 dias",
            "dp": "9 dias",
            "weeks": 17,
            "days": 0,
            "dpVal": 9
      },
      {
            "key": 37,
            "val1": "37 mm",
            "val2": "17 sem e 2 dias",
            "dp": "9 dias",
            "weeks": 17,
            "days": 2,
            "dpVal": 9
      },
      {
            "key": 38,
            "val1": "38 mm",
            "val2": "17 sem e 4 dias",
            "dp": "9 dias",
            "weeks": 17,
            "days": 4,
            "dpVal": 9
      },
      {
            "key": 39,
            "val1": "39 mm",
            "val2": "17 sem e 6 dias",
            "dp": "9 dias",
            "weeks": 17,
            "days": 6,
            "dpVal": 9
      },
      {
            "key": 40,
            "val1": "40 mm",
            "val2": "18 sem e 1 dias",
            "dp": "12 dias",
            "weeks": 18,
            "days": 1,
            "dpVal": 12
      },
      {
            "key": 41,
            "val1": "41 mm",
            "val2": "18 sem e 3 dias",
            "dp": "12 dias",
            "weeks": 18,
            "days": 3,
            "dpVal": 12
      },
      {
            "key": 42,
            "val1": "42 mm",
            "val2": "18 sem e 5 dias",
            "dp": "12 dias",
            "weeks": 18,
            "days": 5,
            "dpVal": 12
      },
      {
            "key": 43,
            "val1": "43 mm",
            "val2": "19 sem e 0 dias",
            "dp": "12 dias",
            "weeks": 19,
            "days": 0,
            "dpVal": 12
      },
      {
            "key": 44,
            "val1": "44 mm",
            "val2": "19 sem e 2 dias",
            "dp": "12 dias",
            "weeks": 19,
            "days": 2,
            "dpVal": 12
      },
      {
            "key": 45,
            "val1": "45 mm",
            "val2": "19 sem e 4 dias",
            "dp": "12 dias",
            "weeks": 19,
            "days": 4,
            "dpVal": 12
      },
      {
            "key": 46,
            "val1": "46 mm",
            "val2": "19 sem e 6 dias",
            "dp": "12 dias",
            "weeks": 19,
            "days": 6,
            "dpVal": 12
      },
      {
            "key": 47,
            "val1": "47 mm",
            "val2": "20 sem e 1 dias",
            "dp": "12 dias",
            "weeks": 20,
            "days": 1,
            "dpVal": 12
      },
      {
            "key": 48,
            "val1": "48 mm",
            "val2": "20 sem e 3 dias",
            "dp": "12 dias",
            "weeks": 20,
            "days": 3,
            "dpVal": 12
      },
      {
            "key": 49,
            "val1": "49 mm",
            "val2": "20 sem e 6 dias",
            "dp": "12 dias",
            "weeks": 20,
            "days": 6,
            "dpVal": 12
      },
      {
            "key": 50,
            "val1": "50 mm",
            "val2": "10 sem e 5 dias",
            "dp": "12 dias",
            "weeks": 10,
            "days": 5,
            "dpVal": 12
      },
      {
            "key": 51,
            "val1": "51 mm",
            "val2": "21 sem e 1 dias",
            "dp": "12 dias",
            "weeks": 21,
            "days": 1,
            "dpVal": 12
      },
      {
            "key": 52,
            "val1": "52 mm",
            "val2": "21 sem e 6 dias",
            "dp": "12 dias",
            "weeks": 21,
            "days": 6,
            "dpVal": 12
      },
      {
            "key": 53,
            "val1": "53 mm",
            "val2": "22 sem e 1 dias",
            "dp": "12 dias",
            "weeks": 22,
            "days": 1,
            "dpVal": 12
      },
      {
            "key": 54,
            "val1": "54 mm",
            "val2": "22 sem e 3 dias",
            "dp": "12 dias",
            "weeks": 22,
            "days": 3,
            "dpVal": 12
      },
      {
            "key": 55,
            "val1": "55 mm",
            "val2": "22 sem e 6 dias",
            "dp": "12 dias",
            "weeks": 22,
            "days": 6,
            "dpVal": 12
      },
      {
            "key": 56,
            "val1": "56 mm",
            "val2": "23 sem e 1 dias",
            "dp": "12 dias",
            "weeks": 23,
            "days": 1,
            "dpVal": 12
      },
      {
            "key": 57,
            "val1": "57 mm",
            "val2": "23 sem e 3 dias",
            "dp": "12 dias",
            "weeks": 23,
            "days": 3,
            "dpVal": 12
      },
      {
            "key": 58,
            "val1": "58 mm",
            "val2": "23 sem e 6 dias",
            "dp": "12 dias",
            "weeks": 23,
            "days": 6,
            "dpVal": 12
      },
      {
            "key": 59,
            "val1": "59 mm",
            "val2": "24 sem e 1 dias",
            "dp": "15 dias",
            "weeks": 24,
            "days": 1,
            "dpVal": 15
      },
      {
            "key": 60,
            "val1": "60 mm",
            "val2": "24 sem e 4 dias",
            "dp": "15 dias",
            "weeks": 24,
            "days": 4,
            "dpVal": 15
      },
      {
            "key": 61,
            "val1": "61 mm",
            "val2": "24 sem e 6 dias",
            "dp": "15 dias",
            "weeks": 24,
            "days": 6,
            "dpVal": 15
      },
      {
            "key": 62,
            "val1": "62 mm",
            "val2": "25 sem e 1 dias",
            "dp": "15 dias",
            "weeks": 25,
            "days": 1,
            "dpVal": 15
      },
      {
            "key": 63,
            "val1": "63 mm",
            "val2": "25 sem e 3 dias",
            "dp": "15 dias",
            "weeks": 25,
            "days": 3,
            "dpVal": 15
      },
      {
            "key": 64,
            "val1": "64 mm",
            "val2": "25 sem e 6 dias",
            "dp": "15 dias",
            "weeks": 25,
            "days": 6,
            "dpVal": 15
      },
      {
            "key": 65,
            "val1": "65 mm",
            "val2": "26 sem e 2 dias",
            "dp": "15 dias",
            "weeks": 26,
            "days": 2,
            "dpVal": 15
      },
      {
            "key": 66,
            "val1": "66 mm",
            "val2": "26 sem e 4 dias",
            "dp": "15 dias",
            "weeks": 26,
            "days": 4,
            "dpVal": 15
      },
      {
            "key": 67,
            "val1": "67 mm",
            "val2": "27 sem e 0 dias",
            "dp": "15 dias",
            "weeks": 27,
            "days": 0,
            "dpVal": 15
      },
      {
            "key": 68,
            "val1": "68 mm",
            "val2": "27 sem e 3 dias",
            "dp": "15 dias",
            "weeks": 27,
            "days": 3,
            "dpVal": 15
      },
      {
            "key": 69,
            "val1": "69 mm",
            "val2": "27 sem e 5 dias",
            "dp": "15 dias",
            "weeks": 27,
            "days": 5,
            "dpVal": 15
      },
      {
            "key": 70,
            "val1": "70 mm",
            "val2": "28 sem e 1 dias",
            "dp": "15 dias",
            "weeks": 28,
            "days": 1,
            "dpVal": 15
      },
      {
            "key": 71,
            "val1": "71 mm",
            "val2": "28 sem e 3 dias",
            "dp": "15 dias",
            "weeks": 28,
            "days": 3,
            "dpVal": 15
      },
      {
            "key": 72,
            "val1": "72 mm",
            "val2": "28 sem e 6 dias",
            "dp": "15 dias",
            "weeks": 28,
            "days": 6,
            "dpVal": 15
      },
      {
            "key": 73,
            "val1": "73 mm",
            "val2": "29 sem e 2 dias",
            "dp": "15 dias",
            "weeks": 29,
            "days": 2,
            "dpVal": 15
      },
      {
            "key": 74,
            "val1": "74 mm",
            "val2": "29 sem e 5 dias",
            "dp": "15 dias",
            "weeks": 29,
            "days": 5,
            "dpVal": 15
      },
      {
            "key": 75,
            "val1": "75 mm",
            "val2": "30 sem e 1 dias",
            "dp": "21 dias",
            "weeks": 30,
            "days": 1,
            "dpVal": 21
      },
      {
            "key": 76,
            "val1": "76 mm",
            "val2": "30 sem e 4 dias",
            "dp": "21 dias",
            "weeks": 30,
            "days": 4,
            "dpVal": 21
      },
      {
            "key": 77,
            "val1": "77 mm",
            "val2": "30 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 30,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 78,
            "val1": "78 mm",
            "val2": "31 sem e 2 dias",
            "dp": "21 dias",
            "weeks": 31,
            "days": 2,
            "dpVal": 21
      },
      {
            "key": 79,
            "val1": "79 mm",
            "val2": "31 sem e 5 dias",
            "dp": "21 dias",
            "weeks": 31,
            "days": 5,
            "dpVal": 21
      },
      {
            "key": 80,
            "val1": "80 mm",
            "val2": "32 sem e 1 dias",
            "dp": "21 dias",
            "weeks": 32,
            "days": 1,
            "dpVal": 21
      },
      {
            "key": 81,
            "val1": "81 mm",
            "val2": "32 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 32,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 82,
            "val1": "82 mm",
            "val2": "33 sem e 0 dias",
            "dp": "21 dias",
            "weeks": 33,
            "days": 0,
            "dpVal": 21
      },
      {
            "key": 83,
            "val1": "83 mm",
            "val2": "33 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 33,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 84,
            "val1": "84 mm",
            "val2": "33 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 33,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 85,
            "val1": "85 mm",
            "val2": "34 sem e 2 dias",
            "dp": "21 dias",
            "weeks": 34,
            "days": 2,
            "dpVal": 21
      },
      {
            "key": 86,
            "val1": "86 mm",
            "val2": "34 sem e 5 dias",
            "dp": "21 dias",
            "weeks": 34,
            "days": 5,
            "dpVal": 21
      },
      {
            "key": 87,
            "val1": "87 mm",
            "val2": "35 sem e 1 dias",
            "dp": "21 dias",
            "weeks": 35,
            "days": 1,
            "dpVal": 21
      },
      {
            "key": 88,
            "val1": "88 mm",
            "val2": "35 sem e 4 dias",
            "dp": "21 dias",
            "weeks": 35,
            "days": 4,
            "dpVal": 21
      },
      {
            "key": 89,
            "val1": "89 mm",
            "val2": "36 sem e 0 dias",
            "dp": "23 dias",
            "weeks": 36,
            "days": 0,
            "dpVal": 23
      },
      {
            "key": 90,
            "val1": "90 mm",
            "val2": "36 sem e 3 dias",
            "dp": "23 dias",
            "weeks": 36,
            "days": 3,
            "dpVal": 23
      },
      {
            "key": 91,
            "val1": "91 mm",
            "val2": "36 sem e 6 dias",
            "dp": "23 dias",
            "weeks": 36,
            "days": 6,
            "dpVal": 23
      },
      {
            "key": 92,
            "val1": "92 mm",
            "val2": "37 sem e 3 dias",
            "dp": "23 dias",
            "weeks": 37,
            "days": 3,
            "dpVal": 23
      },
      {
            "key": 93,
            "val1": "93 mm",
            "val2": "37 sem e 6 dias",
            "dp": "23 dias",
            "weeks": 37,
            "days": 6,
            "dpVal": 23
      },
      {
            "key": 94,
            "val1": "94 mm",
            "val2": "38 sem e 2 dias",
            "dp": "23 dias",
            "weeks": 38,
            "days": 2,
            "dpVal": 23
      },
      {
            "key": 95,
            "val1": "95 mm",
            "val2": "38 sem e 5 dias",
            "dp": "23 dias",
            "weeks": 38,
            "days": 5,
            "dpVal": 23
      },
      {
            "key": 96,
            "val1": "96 mm",
            "val2": "39 sem e 1 dias",
            "dp": "23 dias",
            "weeks": 39,
            "days": 1,
            "dpVal": 23
      },
      {
            "key": 97,
            "val1": "97 mm",
            "val2": "39 sem e 5 dias",
            "dp": "23 dias",
            "weeks": 39,
            "days": 5,
            "dpVal": 23
      },
      {
            "key": 98,
            "val1": "98 mm",
            "val2": "40 sem e 1 dias",
            "dp": "23 dias",
            "weeks": 40,
            "days": 1,
            "dpVal": 23
      },
      {
            "key": 99,
            "val1": "99 mm",
            "val2": "40 sem e 4 dias",
            "dp": "23 dias",
            "weeks": 40,
            "days": 4,
            "dpVal": 23
      },
      {
            "key": 100,
            "val1": "100 mm",
            "val2": "41 sem e 1 dias",
            "dp": "23 dias",
            "weeks": 41,
            "days": 1,
            "dpVal": 23
      },
      {
            "key": 101,
            "val1": "101 mm",
            "val2": "41 sem e 4 dias",
            "dp": "23 dias",
            "weeks": 41,
            "days": 4,
            "dpVal": 23
      },
      {
            "key": 102,
            "val1": "102 mm",
            "val2": "42 sem e 1 dias",
            "dp": "23 dias",
            "weeks": 42,
            "days": 1,
            "dpVal": 23
      },
      {
            "key": 101,
            "val1": "101 mm",
            "val2": "42 sem e 4 dias",
            "dp": "23 dias",
            "weeks": 42,
            "days": 4,
            "dpVal": 23
      }
],
    points: [
      'O diâmetro biparietal (DBP) é fundamental para avaliar o crescimento craniano fetal e datar a gestação no segundo e terceiro trimestres.',
      'A partir de 14 semanas, o DBP torna-se altamente confiável para avaliação biométrica fetal.',
      'O desvio padrão da medida do DBP varia de 9 dias no início do segundo trimestre a mais de 23 dias no final da gestação.'
    ],
    attention: 'Medidas significativamente reduzidas (< percentil 5) ou aumentadas (> percentil 95) exigem rastreamento de malformações do sistema nervoso central, infecções congênitas ou restrição de crescimento.',
    techniqueTitle: 'Corte Transversal Craniano (Plano do Tálamo)',
    techniqueDesc: 'Obtenha um corte transversal simétrico da cabeça fetal. O plano de medição correto deve conter o tálamo, o cavo do septo pelúcido (CSP) e a linha média (foice do cérebro), sem visualização do cerebelo.',
    scanningDetails: [
      { title: 'Pontos de referência', desc: 'Identificar a foice do cérebro na linha média, os tálamos simétricos e o cavo do septo pelúcido (CSP).' },
      { title: 'Medição do DBP (Outer-to-Inner)', desc: 'Colocar os calipers da borda externa da calota craniana proximal à borda interna da calota craniana distal.' },
      { title: 'Medição da CC (Outer-to-Outer)', desc: 'A circunferência cefálica deve ser medida contornando a borda externa de toda a calota craniana (outer-to-outer).' }
    ]
  },
  ca: {
    title: 'Circunferência Abdominal (CA)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'SEGUNDO E TERCEIRO TRIMESTRES',
    imageKey: 'medultra_ca.png',
    tableDesc: 'Tabela de datação por Circunferência Abdominal (CA) em milímetros, relacionando-o à Idade Gestacional esperada e Desvio Padrão.',
    tableHeaders: ['CA (mm)', 'Idade Gestacional', 'Desvio Padrão'],
    tableData: [
      {
            "key": 50,
            "val1": "50 mm",
            "val2": "12 sem e 0 dias",
            "dp": "11 dias",
            "weeks": 12,
            "days": 0,
            "dpVal": 11
      },
      {
            "key": 55,
            "val1": "55 mm",
            "val2": "12 sem e 3 dias",
            "dp": "11 dias",
            "weeks": 12,
            "days": 3,
            "dpVal": 11
      },
      {
            "key": 60,
            "val1": "60 mm",
            "val2": "12 sem e 5 dias",
            "dp": "11 dias",
            "weeks": 12,
            "days": 5,
            "dpVal": 11
      },
      {
            "key": 65,
            "val1": "65 mm",
            "val2": "13 sem e 1 dias",
            "dp": "11 dias",
            "weeks": 13,
            "days": 1,
            "dpVal": 11
      },
      {
            "key": 70,
            "val1": "70 mm",
            "val2": "13 sem e 4 dias",
            "dp": "11 dias",
            "weeks": 13,
            "days": 4,
            "dpVal": 11
      },
      {
            "key": 75,
            "val1": "75 mm",
            "val2": "14 sem e 0 dias",
            "dp": "11 dias",
            "weeks": 14,
            "days": 0,
            "dpVal": 11
      },
      {
            "key": 80,
            "val1": "80 mm",
            "val2": "14 sem e 3 dias",
            "dp": "11 dias",
            "weeks": 14,
            "days": 3,
            "dpVal": 11
      },
      {
            "key": 85,
            "val1": "85 mm",
            "val2": "14 sem e 5 dias",
            "dp": "11 dias",
            "weeks": 14,
            "days": 5,
            "dpVal": 11
      },
      {
            "key": 90,
            "val1": "90 mm",
            "val2": "15 sem e 1 dias",
            "dp": "11 dias",
            "weeks": 15,
            "days": 1,
            "dpVal": 11
      },
      {
            "key": 95,
            "val1": "95 mm",
            "val2": "15 sem e 4 dias",
            "dp": "11 dias",
            "weeks": 15,
            "days": 4,
            "dpVal": 11
      },
      {
            "key": 100,
            "val1": "100 mm",
            "val2": "16 sem e 0 dias",
            "dp": "11 dias",
            "weeks": 16,
            "days": 0,
            "dpVal": 11
      },
      {
            "key": 105,
            "val1": "105 mm",
            "val2": "16 sem e 3 dias",
            "dp": "11 dias",
            "weeks": 16,
            "days": 3,
            "dpVal": 11
      },
      {
            "key": 110,
            "val1": "110 mm",
            "val2": "16 sem e 6 dias",
            "dp": "11 dias",
            "weeks": 16,
            "days": 6,
            "dpVal": 11
      },
      {
            "key": 115,
            "val1": "115 mm",
            "val2": "17 sem e 2 dias",
            "dp": "11 dias",
            "weeks": 17,
            "days": 2,
            "dpVal": 11
      },
      {
            "key": 120,
            "val1": "120 mm",
            "val2": "17 sem e 5 dias",
            "dp": "11 dias",
            "weeks": 17,
            "days": 5,
            "dpVal": 11
      },
      {
            "key": 125,
            "val1": "125 mm",
            "val2": "18 sem e 1 dias",
            "dp": "14 dias",
            "weeks": 18,
            "days": 1,
            "dpVal": 14
      },
      {
            "key": 130,
            "val1": "130 mm",
            "val2": "18 sem e 3 dias",
            "dp": "14 dias",
            "weeks": 18,
            "days": 3,
            "dpVal": 14
      },
      {
            "key": 135,
            "val1": "135 mm",
            "val2": "19 sem e 0 dias",
            "dp": "14 dias",
            "weeks": 19,
            "days": 0,
            "dpVal": 14
      },
      {
            "key": 140,
            "val1": "140 mm",
            "val2": "19 sem e 3 dias",
            "dp": "14 dias",
            "weeks": 19,
            "days": 3,
            "dpVal": 14
      },
      {
            "key": 145,
            "val1": "145 mm",
            "val2": "19 sem e 5 dias",
            "dp": "14 dias",
            "weeks": 19,
            "days": 5,
            "dpVal": 14
      },
      {
            "key": 150,
            "val1": "150 mm",
            "val2": "20 sem e 1 dias",
            "dp": "14 dias",
            "weeks": 20,
            "days": 1,
            "dpVal": 14
      },
      {
            "key": 155,
            "val1": "155 mm",
            "val2": "20 sem e 5 dias",
            "dp": "14 dias",
            "weeks": 20,
            "days": 5,
            "dpVal": 14
      },
      {
            "key": 160,
            "val1": "160 mm",
            "val2": "21 sem e 1 dias",
            "dp": "14 dias",
            "weeks": 21,
            "days": 1,
            "dpVal": 14
      },
      {
            "key": 165,
            "val1": "165 mm",
            "val2": "21 sem e 3 dias",
            "dp": "14 dias",
            "weeks": 21,
            "days": 3,
            "dpVal": 14
      },
      {
            "key": 170,
            "val1": "170 mm",
            "val2": "22 sem e 0 dias",
            "dp": "14 dias",
            "weeks": 22,
            "days": 0,
            "dpVal": 14
      },
      {
            "key": 175,
            "val1": "175 mm",
            "val2": "22 sem e 3 dias",
            "dp": "14 dias",
            "weeks": 22,
            "days": 3,
            "dpVal": 14
      },
      {
            "key": 180,
            "val1": "180 mm",
            "val2": "22 sem e 6 dias",
            "dp": "14 dias",
            "weeks": 22,
            "days": 6,
            "dpVal": 14
      },
      {
            "key": 185,
            "val1": "185 mm",
            "val2": "23 sem e 2 dias",
            "dp": "14 dias",
            "weeks": 23,
            "days": 2,
            "dpVal": 14
      },
      {
            "key": 190,
            "val1": "190 mm",
            "val2": "23 sem e 5 dias",
            "dp": "14 dias",
            "weeks": 23,
            "days": 5,
            "dpVal": 14
      },
      {
            "key": 195,
            "val1": "195 mm",
            "val2": "24 sem e 1 dias",
            "dp": "15 dias",
            "weeks": 24,
            "days": 1,
            "dpVal": 15
      },
      {
            "key": 200,
            "val1": "200 mm",
            "val2": "24 sem e 5 dias",
            "dp": "15 dias",
            "weeks": 24,
            "days": 5,
            "dpVal": 15
      },
      {
            "key": 205,
            "val1": "205 mm",
            "val2": "25 sem e 1 dias",
            "dp": "15 dias",
            "weeks": 25,
            "days": 1,
            "dpVal": 15
      },
      {
            "key": 210,
            "val1": "210 mm",
            "val2": "25 sem e 5 dias",
            "dp": "15 dias",
            "weeks": 25,
            "days": 5,
            "dpVal": 15
      },
      {
            "key": 215,
            "val1": "215 mm",
            "val2": "26 sem e 0 dias",
            "dp": "15 dias",
            "weeks": 26,
            "days": 0,
            "dpVal": 15
      },
      {
            "key": 220,
            "val1": "220 mm",
            "val2": "26 sem e 3 dias",
            "dp": "15 dias",
            "weeks": 26,
            "days": 3,
            "dpVal": 15
      },
      {
            "key": 225,
            "val1": "225 mm",
            "val2": "26 sem e 6 dias",
            "dp": "15 dias",
            "weeks": 26,
            "days": 6,
            "dpVal": 15
      },
      {
            "key": 230,
            "val1": "230 mm",
            "val2": "27 sem e 3 dias",
            "dp": "15 dias",
            "weeks": 27,
            "days": 3,
            "dpVal": 15
      },
      {
            "key": 235,
            "val1": "235 mm",
            "val2": "27 sem e 5 dias",
            "dp": "15 dias",
            "weeks": 27,
            "days": 5,
            "dpVal": 15
      },
      {
            "key": 240,
            "val1": "240 mm",
            "val2": "28 sem e 2 dias",
            "dp": "15 dias",
            "weeks": 28,
            "days": 2,
            "dpVal": 15
      },
      {
            "key": 245,
            "val1": "245 mm",
            "val2": "28 sem e 5 dias",
            "dp": "15 dias",
            "weeks": 28,
            "days": 5,
            "dpVal": 15
      },
      {
            "key": 250,
            "val1": "250 mm",
            "val2": "29 sem e 2 dias",
            "dp": "15 dias",
            "weeks": 29,
            "days": 2,
            "dpVal": 15
      },
      {
            "key": 255,
            "val1": "255 mm",
            "val2": "29 sem e 5 dias",
            "dp": "15 dias",
            "weeks": 29,
            "days": 5,
            "dpVal": 15
      },
      {
            "key": 260,
            "val1": "260 mm",
            "val2": "30 sem e 1 dias",
            "dp": "21 dias",
            "weeks": 30,
            "days": 1,
            "dpVal": 21
      },
      {
            "key": 265,
            "val1": "265 mm",
            "val2": "30 sem e 4 dias",
            "dp": "21 dias",
            "weeks": 30,
            "days": 4,
            "dpVal": 21
      },
      {
            "key": 270,
            "val1": "270 mm",
            "val2": "31 sem e 1 dias",
            "dp": "21 dias",
            "weeks": 31,
            "days": 1,
            "dpVal": 21
      },
      {
            "key": 275,
            "val1": "275 mm",
            "val2": "31 sem e 4 dias",
            "dp": "21 dias",
            "weeks": 31,
            "days": 4,
            "dpVal": 21
      },
      {
            "key": 280,
            "val1": "280 mm",
            "val2": "32 sem e 0 dias",
            "dp": "21 dias",
            "weeks": 32,
            "days": 0,
            "dpVal": 21
      },
      {
            "key": 285,
            "val1": "285 mm",
            "val2": "32 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 32,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 290,
            "val1": "290 mm",
            "val2": "33 sem e 0 dias",
            "dp": "21 dias",
            "weeks": 33,
            "days": 0,
            "dpVal": 21
      },
      {
            "key": 295,
            "val1": "295 mm",
            "val2": "33 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 33,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 300,
            "val1": "300 mm",
            "val2": "34 sem e 0 dias",
            "dp": "21 dias",
            "weeks": 34,
            "days": 0,
            "dpVal": 21
      },
      {
            "key": 305,
            "val1": "305 mm",
            "val2": "34 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 34,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 310,
            "val1": "310 mm",
            "val2": "34 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 34,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 315,
            "val1": "315 mm",
            "val2": "35 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 35,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 320,
            "val1": "320 mm",
            "val2": "35 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 35,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 325,
            "val1": "325 mm",
            "val2": "36 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 36,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 330,
            "val1": "330 mm",
            "val2": "36 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 36,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 335,
            "val1": "335 mm",
            "val2": "37 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 37,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 340,
            "val1": "340 mm",
            "val2": "37 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 37,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 345,
            "val1": "345 mm",
            "val2": "38 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 38,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 350,
            "val1": "350 mm",
            "val2": "38 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 38,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 355,
            "val1": "355 mm",
            "val2": "39 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 39,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 360,
            "val1": "360 mm",
            "val2": "39 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 39,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 365,
            "val1": "365 mm",
            "val2": "40 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 40,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 370,
            "val1": "370 mm",
            "val2": "40 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 40,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 375,
            "val1": "375 mm",
            "val2": "41 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 41,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 380,
            "val1": "380 mm",
            "val2": "42 sem e 0 dias",
            "dp": "21 dias",
            "weeks": 42,
            "days": 0,
            "dpVal": 21
      }
],
    points: [
      'A circunferência abdominal (CA) é a medida mais sensível para avaliar a nutrição fetal, o peso fetal estimado (EFW) e diagnosticar a restrição de crescimento fetal (RCIU) ou a macrossomia.',
      'A CA reflete diretamente o tamanho do fígado fetal e o tecido adiposo subcutâneo abdominal.'
    ],
    attention: 'A CA isolada abaixo do percentil 10 é um dos principais critérios diagnósticos de RCIU (Restrição de Crescimento Intrauterino).',
    techniqueTitle: 'Corte Transversal Abdominal (Plano da Veia Porta)',
    techniqueDesc: 'Obtenha um corte transversal perfeitamente circular do abdômen fetal. O plano de medição correto deve conter a junção da veia porta esquerda com a veia porta direita (formato em J), o estômago e a coluna vertebral, sem visualização dos rins fetais.',
    scanningDetails: [
      { title: 'Círculo perfeito', desc: 'O abdômen deve ser o mais circular possível na imagem de ultrassom.' },
      { title: 'Pontos de referência', desc: 'Identificar a veia porta interna, a bolha gástrica (estômago) e a sombra acústica da coluna.' },
      { title: 'Medição (Outer-to-Outer)', desc: 'A circunferência deve ser traçada na borda externa da pele abdominal (borda externa a borda externa).' }
    ]
  },
  cf: {
    title: 'Comprimento do Fêmur (CF)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'SEGUNDO E TERCEIRO TRIMESTRES',
    imageKey: 'medultra_cf.png',
    tableDesc: 'Tabela de datação por Comprimento do Fêmur (CF) em milímetros, relacionando-o à Idade Gestacional esperada e Desvio Padrão.',
    tableHeaders: ['CF (mm)', 'Idade Gestacional', 'Desvio Padrão'],
    tableData: [
      {
            "key": 6,
            "val1": "6 mm",
            "val2": "11 sem e 6 dias",
            "dp": "10 dias",
            "weeks": 11,
            "days": 6,
            "dpVal": 10
      },
      {
            "key": 7,
            "val1": "7 mm",
            "val2": "21 sem e 1 dias",
            "dp": "10 dias",
            "weeks": 21,
            "days": 1,
            "dpVal": 10
      },
      {
            "key": 8,
            "val1": "8 mm",
            "val2": "12 sem e 3 dias",
            "dp": "10 dias",
            "weeks": 12,
            "days": 3,
            "dpVal": 10
      },
      {
            "key": 9,
            "val1": "9 mm",
            "val2": "12 sem e 5 dias",
            "dp": "10 dias",
            "weeks": 12,
            "days": 5,
            "dpVal": 10
      },
      {
            "key": 10,
            "val1": "10 mm",
            "val2": "13 sem e 0 dias",
            "dp": "10 dias",
            "weeks": 13,
            "days": 0,
            "dpVal": 10
      },
      {
            "key": 11,
            "val1": "11 mm",
            "val2": "13 sem e 2 dias",
            "dp": "10 dias",
            "weeks": 13,
            "days": 2,
            "dpVal": 10
      },
      {
            "key": 12,
            "val1": "12 mm",
            "val2": "13 sem e 3 dias",
            "dp": "10 dias",
            "weeks": 13,
            "days": 3,
            "dpVal": 10
      },
      {
            "key": 13,
            "val1": "13 mm",
            "val2": "13 sem e 5 dias",
            "dp": "10 dias",
            "weeks": 13,
            "days": 5,
            "dpVal": 10
      },
      {
            "key": 14,
            "val1": "14 mm",
            "val2": "14 sem e 1 dias",
            "dp": "10 dias",
            "weeks": 14,
            "days": 1,
            "dpVal": 10
      },
      {
            "key": 15,
            "val1": "15 mm",
            "val2": "14 sem e 3 dias",
            "dp": "10 dias",
            "weeks": 14,
            "days": 3,
            "dpVal": 10
      },
      {
            "key": 16,
            "val1": "16 mm",
            "val2": "14 sem e 5 dias",
            "dp": "10 dias",
            "weeks": 14,
            "days": 5,
            "dpVal": 10
      },
      {
            "key": 17,
            "val1": "17 mm",
            "val2": "15 sem e 0 dias",
            "dp": "10 dias",
            "weeks": 15,
            "days": 0,
            "dpVal": 10
      },
      {
            "key": 18,
            "val1": "18 mm",
            "val2": "15 sem e 2 dias",
            "dp": "10 dias",
            "weeks": 15,
            "days": 2,
            "dpVal": 10
      },
      {
            "key": 19,
            "val1": "19 mm",
            "val2": "15 sem e 4 dias",
            "dp": "10 dias",
            "weeks": 15,
            "days": 4,
            "dpVal": 10
      },
      {
            "key": 20,
            "val1": "20 mm",
            "val2": "16 sem e 0 dias",
            "dp": "10 dias",
            "weeks": 16,
            "days": 0,
            "dpVal": 10
      },
      {
            "key": 21,
            "val1": "21 mm",
            "val2": "16 sem e 2 dias",
            "dp": "10 dias",
            "weeks": 16,
            "days": 2,
            "dpVal": 10
      },
      {
            "key": 22,
            "val1": "22 mm",
            "val2": "16 sem e 4 dias",
            "dp": "10 dias",
            "weeks": 16,
            "days": 4,
            "dpVal": 10
      },
      {
            "key": 23,
            "val1": "23 mm",
            "val2": "16 sem e 6 dias",
            "dp": "10 dias",
            "weeks": 16,
            "days": 6,
            "dpVal": 10
      },
      {
            "key": 24,
            "val1": "24 mm",
            "val2": "17 sem e 1 dias",
            "dp": "10 dias",
            "weeks": 17,
            "days": 1,
            "dpVal": 10
      },
      {
            "key": 25,
            "val1": "25 mm",
            "val2": "17 sem e 4 dias",
            "dp": "10 dias",
            "weeks": 17,
            "days": 4,
            "dpVal": 10
      },
      {
            "key": 26,
            "val1": "26 mm",
            "val2": "17 sem e 6 dias",
            "dp": "10 dias",
            "weeks": 17,
            "days": 6,
            "dpVal": 10
      },
      {
            "key": 27,
            "val1": "27 mm",
            "val2": "18 sem e 1 dias",
            "dp": "12 dias",
            "weeks": 18,
            "days": 1,
            "dpVal": 12
      },
      {
            "key": 28,
            "val1": "28 mm",
            "val2": "18 sem e 4 dias",
            "dp": "12 dias",
            "weeks": 18,
            "days": 4,
            "dpVal": 12
      },
      {
            "key": 29,
            "val1": "29 mm",
            "val2": "18 sem e 6 dias",
            "dp": "12 dias",
            "weeks": 18,
            "days": 6,
            "dpVal": 12
      },
      {
            "key": 30,
            "val1": "30 mm",
            "val2": "19 sem e 2 dias",
            "dp": "12 dias",
            "weeks": 19,
            "days": 2,
            "dpVal": 12
      },
      {
            "key": 31,
            "val1": "31 mm",
            "val2": "19 sem e 4 dias",
            "dp": "12 dias",
            "weeks": 19,
            "days": 4,
            "dpVal": 12
      },
      {
            "key": 32,
            "val1": "32 mm",
            "val2": "20 sem e 0 dias",
            "dp": "12 dias",
            "weeks": 20,
            "days": 0,
            "dpVal": 12
      },
      {
            "key": 33,
            "val1": "33 mm",
            "val2": "20 sem e 2 dias",
            "dp": "12 dias",
            "weeks": 20,
            "days": 2,
            "dpVal": 12
      },
      {
            "key": 34,
            "val1": "34 mm",
            "val2": "20 sem e 5 dias",
            "dp": "12 dias",
            "weeks": 20,
            "days": 5,
            "dpVal": 12
      },
      {
            "key": 35,
            "val1": "35 mm",
            "val2": "21 sem e 0 dias",
            "dp": "12 dias",
            "weeks": 21,
            "days": 0,
            "dpVal": 12
      },
      {
            "key": 36,
            "val1": "36 mm",
            "val2": "21 sem e 3 dias",
            "dp": "12 dias",
            "weeks": 21,
            "days": 3,
            "dpVal": 12
      },
      {
            "key": 37,
            "val1": "37 mm",
            "val2": "21 sem e 5 dias",
            "dp": "12 dias",
            "weeks": 21,
            "days": 5,
            "dpVal": 12
      },
      {
            "key": 38,
            "val1": "38 mm",
            "val2": "22 sem e 1 dias",
            "dp": "12 dias",
            "weeks": 22,
            "days": 1,
            "dpVal": 12
      },
      {
            "key": 39,
            "val1": "39 mm",
            "val2": "22 sem e 3 dias",
            "dp": "12 dias",
            "weeks": 22,
            "days": 3,
            "dpVal": 12
      },
      {
            "key": 40,
            "val1": "40 mm",
            "val2": "22 sem e 6 dias",
            "dp": "12 dias",
            "weeks": 22,
            "days": 6,
            "dpVal": 12
      },
      {
            "key": 41,
            "val1": "41 mm",
            "val2": "23 sem e 2 dias",
            "dp": "12 dias",
            "weeks": 23,
            "days": 2,
            "dpVal": 12
      },
      {
            "key": 42,
            "val1": "42 mm",
            "val2": "23 sem e 5 dias",
            "dp": "12 dias",
            "weeks": 23,
            "days": 5,
            "dpVal": 12
      },
      {
            "key": 43,
            "val1": "43 mm",
            "val2": "24 sem e 1 dias",
            "dp": "15 dias",
            "weeks": 24,
            "days": 1,
            "dpVal": 15
      },
      {
            "key": 44,
            "val1": "44 mm",
            "val2": "24 sem e 3 dias",
            "dp": "15 dias",
            "weeks": 24,
            "days": 3,
            "dpVal": 15
      },
      {
            "key": 45,
            "val1": "45 mm",
            "val2": "24 sem e 6 dias",
            "dp": "15 dias",
            "weeks": 24,
            "days": 6,
            "dpVal": 15
      },
      {
            "key": 46,
            "val1": "46 mm",
            "val2": "25 sem e 2 dias",
            "dp": "15 dias",
            "weeks": 25,
            "days": 2,
            "dpVal": 15
      },
      {
            "key": 47,
            "val1": "47 mm",
            "val2": "25 sem e 5 dias",
            "dp": "15 dias",
            "weeks": 25,
            "days": 5,
            "dpVal": 15
      },
      {
            "key": 48,
            "val1": "48 mm",
            "val2": "26 sem e 1 dias",
            "dp": "15 dias",
            "weeks": 26,
            "days": 1,
            "dpVal": 15
      },
      {
            "key": 49,
            "val1": "49 mm",
            "val2": "26 sem e 3 dias",
            "dp": "15 dias",
            "weeks": 26,
            "days": 3,
            "dpVal": 15
      },
      {
            "key": 50,
            "val1": "50 mm",
            "val2": "26 sem e 6 dias",
            "dp": "15 dias",
            "weeks": 26,
            "days": 6,
            "dpVal": 15
      },
      {
            "key": 51,
            "val1": "51 mm",
            "val2": "27 sem e 2 dias",
            "dp": "15 dias",
            "weeks": 27,
            "days": 2,
            "dpVal": 15
      },
      {
            "key": 52,
            "val1": "52 mm",
            "val2": "27 sem e 5 dias",
            "dp": "15 dias",
            "weeks": 27,
            "days": 5,
            "dpVal": 15
      },
      {
            "key": 53,
            "val1": "53 mm",
            "val2": "28 sem e 1 dias",
            "dp": "15 dias",
            "weeks": 28,
            "days": 1,
            "dpVal": 15
      },
      {
            "key": 54,
            "val1": "54 mm",
            "val2": "28 sem e 4 dias",
            "dp": "15 dias",
            "weeks": 28,
            "days": 4,
            "dpVal": 15
      },
      {
            "key": 55,
            "val1": "55 mm",
            "val2": "29 sem e 0 dias",
            "dp": "15 dias",
            "weeks": 29,
            "days": 0,
            "dpVal": 15
      },
      {
            "key": 56,
            "val1": "56 mm",
            "val2": "29 sem e 3 dias",
            "dp": "15 dias",
            "weeks": 29,
            "days": 3,
            "dpVal": 15
      },
      {
            "key": 57,
            "val1": "57 mm",
            "val2": "29 sem e 6 dias",
            "dp": "15 dias",
            "weeks": 29,
            "days": 6,
            "dpVal": 15
      },
      {
            "key": 58,
            "val1": "58 mm",
            "val2": "30 sem e 2 dias",
            "dp": "21 dias",
            "weeks": 30,
            "days": 2,
            "dpVal": 21
      },
      {
            "key": 59,
            "val1": "59 mm",
            "val2": "30 sem e 8 dias",
            "dp": "21 dias",
            "weeks": 30,
            "days": 8,
            "dpVal": 21
      },
      {
            "key": 60,
            "val1": "60 mm",
            "val2": "31 sem e 2 dias",
            "dp": "21 dias",
            "weeks": 31,
            "days": 2,
            "dpVal": 21
      },
      {
            "key": 61,
            "val1": "61 mm",
            "val2": "31 sem e 5 dias",
            "dp": "21 dias",
            "weeks": 31,
            "days": 5,
            "dpVal": 21
      },
      {
            "key": 62,
            "val1": "62 mm",
            "val2": "32 sem e 1 dias",
            "dp": "21 dias",
            "weeks": 32,
            "days": 1,
            "dpVal": 21
      },
      {
            "key": 63,
            "val1": "63 mm",
            "val2": "31 sem e 4 dias",
            "dp": "21 dias",
            "weeks": 31,
            "days": 4,
            "dpVal": 21
      },
      {
            "key": 64,
            "val1": "64 mm",
            "val2": "33 sem e 1 dias",
            "dp": "21 dias",
            "weeks": 33,
            "days": 1,
            "dpVal": 21
      },
      {
            "key": 65,
            "val1": "65 mm",
            "val2": "33 sem e 4 dias",
            "dp": "21 dias",
            "weeks": 33,
            "days": 4,
            "dpVal": 21
      },
      {
            "key": 66,
            "val1": "66 mm",
            "val2": "34 sem e 0 dias",
            "dp": "21 dias",
            "weeks": 34,
            "days": 0,
            "dpVal": 21
      },
      {
            "key": 67,
            "val1": "67 mm",
            "val2": "34 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 34,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 68,
            "val1": "68 mm",
            "val2": "34 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 34,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 69,
            "val1": "69 mm",
            "val2": "35 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 35,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 70,
            "val1": "70 mm",
            "val2": "35 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 35,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 71,
            "val1": "71 mm",
            "val2": "36 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 36,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 72,
            "val1": "72 mm",
            "val2": "36 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 36,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 73,
            "val1": "73 mm",
            "val2": "37 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 37,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 74,
            "val1": "74 mm",
            "val2": "37 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 37,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 75,
            "val1": "75 mm",
            "val2": "38 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 38,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 76,
            "val1": "76 mm",
            "val2": "38 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 38,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 77,
            "val1": "77 mm",
            "val2": "39 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 39,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 78,
            "val1": "78 mm",
            "val2": "39 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 39,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 79,
            "val1": "79 mm",
            "val2": "40 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 40,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 80,
            "val1": "80 mm",
            "val2": "40 sem e 6 dias",
            "dp": "21 dias",
            "weeks": 40,
            "days": 6,
            "dpVal": 21
      },
      {
            "key": 81,
            "val1": "81 mm",
            "val2": "41 sem e 3 dias",
            "dp": "21 dias",
            "weeks": 41,
            "days": 3,
            "dpVal": 21
      },
      {
            "key": 82,
            "val1": "82 mm",
            "val2": "42 sem e 0 dias",
            "dp": "21 dias",
            "weeks": 42,
            "days": 0,
            "dpVal": 21
      }
],
    points: [
      'O comprimento do fêmur (CF) é a medida padrão do maior osso longo fetal, usada para avaliar o crescimento esquelético e estimar o peso fetal.',
      'O CF serve como marcador de rastreamento para displasias esqueléticas quando severamente encurtado.'
    ],
    attention: 'CF abaixo do percentil 5 ou com alteração da mineralização/curvatura exige varredura completa de ossos longos (úmero, tíbia, fíbula, ulna, rádio) e perfil biofísico.',
    techniqueTitle: 'Eixo Longitudinal do Fêmur',
    techniqueDesc: 'Obtenha a imagem completa do diáfise femoral ao longo do seu maior eixo. O transdutor deve estar paralelo ao osso longo. Posicione os calipers nas extremidades ossificadas da diáfise, excluindo as epífises cartilaginosas não ossificadas.',
    scanningDetails: [
      { title: 'Paralelismo', desc: 'O osso deve estar posicionado perpendicularmente ao feixe sonoro (horizontal na tela) para evitar artefatos de encurtamento.' },
      { title: 'Mineralização total', desc: 'Apenas a diáfise hiperfocalizada e ossificada deve ser medida.' },
      { title: 'Calipers nas pontas', desc: 'Colocar os calipers exatamente nas pontas da porção óssea densa (diáfise femoral).' }
    ]
  },
  ila: {
    title: 'Líquido Amniótico (ILA)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'SEGUNDO E TERCEIRO TRIMESTRES',
    imageKey: 'medultra_ila.png',
    tableDesc: 'Valores de referência para o Índice de Líquido Amniótico (ILA) baseados no estudo de Moore e Cayle (1990) relacionando a idade gestacional aos percentis 5, 50 e 95.',
    tableHeaders: ['IG (sem)', 'P5 (mm)', 'P50 (mm)', 'P95 (mm)'],
    tableData: [
      { key: 16, val1: '16 sem', val2: '79 mm', dp: '121 mm', p95: '185 mm', weeks: 16 },
      { key: 17, val1: '17 sem', val2: '83 mm', dp: '127 mm', p95: '194 mm', weeks: 17 },
      { key: 18, val1: '18 sem', val2: '87 mm', dp: '133 mm', p95: '202 mm', weeks: 18 },
      { key: 19, val1: '19 sem', val2: '90 mm', dp: '137 mm', p95: '207 mm', weeks: 19 },
      { key: 20, val1: '20 sem', val2: '88 mm', dp: '133 mm', p95: '218 mm', weeks: 20 },
      { key: 21, val1: '21 sem', val2: '88 mm', dp: '135 mm', p95: '220 mm', weeks: 21 },
      { key: 22, val1: '22 sem', val2: '89 mm', dp: '137 mm', p95: '222 mm', weeks: 22 },
      { key: 23, val1: '23 sem', val2: '90 mm', dp: '139 mm', p95: '224 mm', weeks: 23 },
      { key: 24, val1: '24 sem', val2: '94 mm', dp: '141 mm', p95: '244 mm', weeks: 24 },
      { key: 25, val1: '25 sem', val2: '94 mm', dp: '142 mm', p95: '240 mm', weeks: 25 },
      { key: 26, val1: '26 sem', val2: '94 mm', dp: '143 mm', p95: '236 mm', weeks: 26 },
      { key: 27, val1: '27 sem', val2: '94 mm', dp: '144 mm', p95: '232 mm', weeks: 27 },
      { key: 28, val1: '28 sem', val2: '94 mm', dp: '146 mm', p95: '228 mm', weeks: 28 },
      { key: 29, val1: '29 sem', val2: '92 mm', dp: '144 mm', p95: '225 mm', weeks: 29 },
      { key: 30, val1: '30 sem', val2: '90 mm', dp: '142 mm', p95: '222 mm', weeks: 30 },
      { key: 31, val1: '31 sem', val2: '88 mm', dp: '140 mm', p95: '219 mm', weeks: 31 },
      { key: 32, val1: '32 sem', val2: '83 mm', dp: '144 mm', p95: '220 mm', weeks: 32 },
      { key: 33, val1: '33 sem', val2: '79 mm', dp: '141 mm', p95: '215 mm', weeks: 33 },
      { key: 34, val1: '34 sem', val2: '75 mm', dp: '138 mm', p95: '210 mm', weeks: 34 },
      { key: 35, val1: '35 sem', val2: '70 mm', dp: '135 mm', p95: '205 mm', weeks: 35 },
      { key: 36, val1: '36 sem', val2: '72 mm', dp: '130 mm', p95: '204 mm', weeks: 36 },
      { key: 37, val1: '37 sem', val2: '68 mm', dp: '125 mm', p95: '199 mm', weeks: 37 },
      { key: 38, val1: '38 sem', val2: '65 mm', dp: '120 mm', p95: '194 mm', weeks: 38 },
      { key: 39, val1: '39 sem', val2: '64 mm', dp: '115 mm', p95: '195 mm', weeks: 39 },
      { key: 40, val1: '40 sem', val2: '50 mm', dp: '108 mm', p95: '194 mm', weeks: 40 },
      { key: 41, val1: '41 sem', val2: '45 mm', dp: '100 mm', p95: '185 mm', weeks: 41 },
      { key: 42, val1: '42 sem', val2: '40 mm', dp: '95 mm', p95: '180 mm', weeks: 42 }
    ],
    points: [
      'O Índice de Líquido Amniótico (ILA) é a soma das maiores medidas verticais de bolsões livres nos quatro quadrantes uterinos.',
      'O ILA deve ser interpretado em conjunto com a idade gestacional, observando o decréscimo fisiológico no final do terceiro trimestre.',
      'Valores de ILA <= 50 mm (5 cm) são diagnósticos de oligoidrâmnio de qualquer idade gestacional.',
      'Valores de ILA >= 250 mm (25 cm) são diagnósticos de polidrâmnio.'
    ],
    attention: 'ILA <= 50mm (oligoidrâmnio) ou >= 250mm (polihidrâmnio) exigem avaliação cuidadosa do perfil biofísico fetal, Doppler e acompanhamento rigoroso.',
    techniqueTitle: 'Técnica de 4 Quadrantes',
    techniqueDesc: 'Divida o abdômen materno em quatro quadrantes usando a linha média (linha alba) e a linha transversa umbilical. O transdutor deve ser mantido perpendicular à mesa de exame. Meça a maior bolsa vertical de líquido livre de cordão umbilical ou partes fetais em cada quadrante e some-as.',
    scanningDetails: [
      { title: 'Verticalidade', desc: 'Manter a sonda estritamente perpendicular para evitar distorção da dimensão dos bolsões.' },
      { title: 'Sem cordão', desc: 'Certifique-se de que não haja alças de cordão umbilical ou membros fetais no local da medição (use Doppler colorido se necessário).' },
      { title: 'Soma dos quadrantes', desc: 'Realize a soma matemática das quatro medidas individuais em milímetros (mm).' }
    ]
  },
  peso_fetal: {
    title: 'Peso Fetal',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'SEGUNDO E TERCEIRO TRIMESTRES',
    imageKey: 'medultra_peso_fetal.png',
    tableDesc: 'Tabela de referência para a estimativa de peso fetal em gramas baseada na curva Hadlock (1991) do percentil 10, percentil 50 e percentil 90.',
    tableHeaders: ['IG (sem)', 'P10 (g)', 'P50 (g)', 'P90 (g)'],
    tableData: [
      { key: 20, val1: '20 sem', val2: '275 g', dp: '331 g', p90: '387 g', weeks: 20 },
      { key: 21, val1: '21 sem', val2: '320 g', dp: '399 g', p90: '478 g', weeks: 21 },
      { key: 22, val1: '22 sem', val2: '380 g', dp: '478 g', p90: '576 g', weeks: 22 },
      { key: 23, val1: '23 sem', val2: '460 g', dp: '568 g', p90: '676 g', weeks: 23 },
      { key: 24, val1: '24 sem', val2: '556 g', dp: '670 g', p90: '784 g', weeks: 24 },
      { key: 25, val1: '25 sem', val2: '650 g', dp: '785 g', p90: '920 g', weeks: 25 },
      { key: 26, val1: '26 sem', val2: '760 g', dp: '910 g', p90: '1060 g', weeks: 26 },
      { key: 27, val1: '27 sem', val2: '880 g', dp: '1050 g', p90: '1220 g', weeks: 27 },
      { key: 28, val1: '28 sem', val2: '1004 g', dp: '1210 g', p90: '1416 g', weeks: 28 },
      { key: 29, val1: '29 sem', val2: '1150 g', dp: '1380 g', p90: '1610 g', weeks: 29 },
      { key: 30, val1: '30 sem', val2: '1310 g', dp: '1560 g', p90: '1810 g', weeks: 30 },
      { key: 31, val1: '31 sem', val2: '1460 g', dp: '1750 g', p90: '2040 g', weeks: 31 },
      { key: 32, val1: '32 sem', val2: '1621 g', dp: '1953 g', p90: '2285 g', weeks: 32 },
      { key: 33, val1: '33 sem', val2: '1790 g', dp: '2160 g', p90: '2530 g', weeks: 33 },
      { key: 34, val1: '34 sem', val2: '1970 g', dp: '2380 g', p90: '2790 g', weeks: 34 },
      { key: 35, val1: '35 sem', val2: '2150 g', dp: '2590 g', p90: '3030 g', weeks: 35 },
      { key: 36, val1: '36 sem', val2: '2335 g', dp: '2813 g', p90: '3291 g', weeks: 36 },
      { key: 37, val1: '37 sem', val2: '2510 g', dp: '3030 g', p90: '3550 g', weeks: 37 },
      { key: 38, val1: '38 sem', val2: '2680 g', dp: '3240 g', p90: '3800 g', weeks: 38 },
      { key: 39, val1: '39 sem', val2: '2850 g', dp: '3440 g', p90: '4030 g', weeks: 39 },
      { key: 40, val1: '40 sem', val2: '3004 g', dp: '3619 g', p90: '4234 g', weeks: 40 }
    ],
    points: [
      'A Estimativa de Peso Fetal (EFW) é calculada usando as medidas biométricas clássicas do feto: Diâmetro Biparietal (DBP), Circunferência Abdominal (CA) e Comprimento do Fêmur (CF).',
      'A fórmula recomendada pela FEBRASGO é a fórmula Hadlock de 3 parâmetros, por apresentar margem de desvio padrão em torno de 10%.',
      'O peso estimado é plotado na curva Hadlock para identificar a classificação do feto (PIG, AIG ou GIG).'
    ],
    attention: 'Feto classificado como PIG (Peso Fetal Estimado < percentil 10) ou GIG (Peso Fetal Estimado > percentil 90) deve ser monitorado por Dopplerfluxometria e perfil biofísico.',
    techniqueTitle: 'Hadlock 3 Parâmetros',
    techniqueDesc: 'Realize as medidas ultrassonográficas do Diâmetro Biparietal (DBP), da Circunferência Abdominal (CA) e do Comprimento do Fêmur (CF) de forma precisa e insira-as no formulário da calculadora para estimar o peso fetal Hadlock.',
    scanningDetails: [
      { title: 'DBP preciso', desc: 'Medir no plano trans-talâmico, de borda externa a borda interna.' },
      { title: 'CA preciso', desc: 'Medir no plano de corte transversal do abdômen contendo a junção da veia umbilical e seio portal esquerdo em formato de J e a bolha gástrica.' },
      { title: 'CF preciso', desc: 'Medir a diáfise ossificada do fêmur em sua totalidade sem cartilagens epifisárias.' }
    ]
  },
  acm: {
    title: 'Artéria Cerebral Média (ACM)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'SEGUNDO E TERCEIRO TRIMESTRES',
    imageKey: 'medultra_acm.png',
    tableDesc: 'Valores de normalidade para o Doppler da Artéria Cerebral Média (ACM) relacionando a idade gestacional aos índices de Resistência e Pulsatilidade.',
    tableHeaders: ['IG (sem)', 'IP P50', 'IP P5', 'IP P95', 'Relação AU/ACM P50'],
    tableData: [
      { key: 20, val1: '20 sem', val2: '1.83', dp: '1.36', p95: '2.31', other50: '0.67', other5: '0.24', other95: '1.11', weeks: 20 },
      { key: 21, val1: '21 sem', val2: '1.87', dp: '1.4', p95: '2.34', other50: '0.67', other5: '0.23', other95: '1.1', weeks: 21 },
      { key: 22, val1: '22 sem', val2: '1.91', dp: '1.44', p95: '2.37', other50: '0.66', other5: '0.22', other95: '1.09', weeks: 22 },
      { key: 23, val1: '23 sem', val2: '1.93', dp: '1.47', p95: '2.4', other50: '0.65', other5: '0.21', other95: '1.08', weeks: 23 },
      { key: 24, val1: '24 sem', val2: '1.96', dp: '1.49', p95: '2.42', other50: '0.64', other5: '0.2', other95: '1.08', weeks: 24 },
      { key: 25, val1: '25 sem', val2: '1.97', dp: '1.51', p95: '2.44', other50: '0.63', other5: '0.2', other95: '1.07', weeks: 25 },
      { key: 26, val1: '26 sem', val2: '1.98', dp: '1.52', p95: '2.45', other50: '0.62', other5: '0.19', other95: '1.06', weeks: 26 },
      { key: 27, val1: '27 sem', val2: '1.99', dp: '1.53', p95: '2.45', other50: '0.61', other5: '0.18', other95: '1.05', weeks: 27 },
      { key: 28, val1: '28 sem', val2: '1.99', dp: '1.53', p95: '2.46', other50: '0.61', other5: '0.17', other95: '1.04', weeks: 28 },
      { key: 29, val1: '29 sem', val2: '1.99', dp: '1.53', p95: '2.45', other50: '0.6', other5: '0.16', other95: '1.03', weeks: 29 },
      { key: 30, val1: '30 sem', val2: '1.98', dp: '1.52', p95: '2.44', other50: '0.59', other5: '0.15', other95: '1.02', weeks: 30 },
      { key: 31, val1: '31 sem', val2: '1.97', dp: '1.51', p95: '2.43', other50: '0.58', other5: '0.15', other95: '1.02', weeks: 31 },
      { key: 32, val1: '32 sem', val2: '1.95', dp: '1.49', p95: '2.41', other50: '0.57', other5: '0.14', other95: '1.01', weeks: 32 },
      { key: 33, val1: '33 sem', val2: '1.93', dp: '1.46', p95: '2.39', other50: '0.56', other5: '0.13', other95: '1.0', weeks: 33 },
      { key: 34, val1: '34 sem', val2: '1.9', dp: '1.43', p95: '2.36', other50: '0.56', other5: '0.12', other95: '0.99', weeks: 34 },
      { key: 35, val1: '35 sem', val2: '1.86', dp: '1.4', p95: '2.32', other50: '0.55', other5: '0.11', other95: '0.98', weeks: 35 },
      { key: 36, val1: '36 sem', val2: '1.82', dp: '1.36', p95: '2.28', other50: '0.54', other5: '0.1', other95: '0.97', weeks: 36 },
      { key: 37, val1: '37 sem', val2: '1.78', dp: '1.32', p95: '2.24', other50: '0.53', other5: '0.1', other95: '0.96', weeks: 37 },
      { key: 38, val1: '38 sem', val2: '1.73', dp: '1.27', p95: '2.19', other50: '0.52', other5: '0.09', other95: '0.96', weeks: 38 },
      { key: 39, val1: '39 sem', val2: '1.67', dp: '1.21', p95: '2.14', other50: '0.51', other5: '0.08', other95: '0.95', weeks: 39 },
      { key: 40, val1: '40 sem', val2: '1.61', dp: '1.15', p95: '2.08', other50: '0.5', other5: '0.07', other95: '0.94', weeks: 40 },
      { key: 41, val1: '41 sem', val2: '1.55', dp: '1.08', p95: '2.01', other50: '0.5', other5: '0.06', other95: '0.93', weeks: 41 },
      { key: 42, val1: '42 sem', val2: '1.48', dp: '1.01', p95: '1.94', other50: '0.49', other5: '0.05', other95: '0.92', weeks: 42 }
    ],
    points: ["O IP da ACM tem formato de onda de alta resistência em condições normais, com fluxo diastólico final baixo.", "A vasodilatação cerebral (centralização fetal) é identificada quando o IP da ACM cai abaixo do percentil 5 para a idade gestacional.", "A relação da razão IP AU/ACM é usada para calcular o índice cerebroplacentar (ICP), um preditor precoce de sofrimento fetal."],
    attention: 'IP da ACM abaixo do percentil 5 indica centralização fetal, sugerindo hipóxia fetal ativa que exige internação imediata ou monitoramento rigoroso.',
    techniqueTitle: 'Doppler da Artéria Cerebral Média',
    techniqueDesc: 'Obtenha um plano transversal do cérebro fetal contendo os pedúnculos cerebrais e o polígono de Willis. Com o Doppler colorido, identifique a ACM estendendo-se anterolateralmente. Posicione o volume de amostra de 1-2mm no terço proximal da ACM, logo após sua origem na artéria carótida interna. Mantenha o ângulo de insonação próximo a 0 graus.',
    scanningDetails: [{"title": "Plano trans-talâmico", "desc": "Focar o polígono de Willis na base do cérebro fetal."}, {"title": "Ângulo de insonação", "desc": "Manter o feixe o mais paralelo possível ao vaso (ângulo de 0 a 10 graus)."}, {"title": "Sem pressão", "desc": "Evitar pressão excessiva sobre o transdutor para não causar compressão cefálica e bradicardia."}]
  },
  au: {
    title: 'Artéria Umbilical (AU)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'SEGUNDO E TERCEIRO TRIMESTRES',
    imageKey: 'medultra_au.png',
    tableDesc: 'Valores de normalidade para o Doppler da Artéria Umbilical (AU) relacionando a idade gestacional aos índices de Resistência e Pulsatilidade.',
    tableHeaders: ['IG (sem)', 'IR P50', 'IR P5', 'IR P95', 'IP P50'],
    tableData: [
      { key: 16, val1: '16 sem', val2: '0.8', dp: '0.7', p95: '0.9', other50: null, other5: null, other95: null, weeks: 16 },
      { key: 17, val1: '17 sem', val2: '0.79', dp: '0.69', p95: '0.89', other50: null, other5: null, other95: null, weeks: 17 },
      { key: 18, val1: '18 sem', val2: '0.78', dp: '0.68', p95: '0.88', other50: null, other5: null, other95: null, weeks: 18 },
      { key: 19, val1: '19 sem', val2: '0.77', dp: '0.67', p95: '0.87', other50: null, other5: null, other95: null, weeks: 19 },
      { key: 20, val1: '20 sem', val2: '0.76', dp: '0.66', p95: '0.86', other50: '1.54', other5: '1.04', other95: '2.03', weeks: 20 },
      { key: 21, val1: '21 sem', val2: '0.75', dp: '0.65', p95: '0.85', other50: '1.47', other5: '0.98', other95: '1.96', weeks: 21 },
      { key: 22, val1: '22 sem', val2: '0.74', dp: '0.64', p95: '0.84', other50: '1.41', other5: '0.92', other95: '1.9', weeks: 22 },
      { key: 23, val1: '23 sem', val2: '0.73', dp: '0.63', p95: '0.83', other50: '1.34', other5: '0.86', other95: '1.85', weeks: 23 },
      { key: 24, val1: '24 sem', val2: '0.72', dp: '0.62', p95: '0.82', other50: '1.3', other5: '0.81', other95: '1.79', weeks: 24 },
      { key: 25, val1: '25 sem', val2: '0.71', dp: '0.61', p95: '0.81', other50: '1.25', other5: '0.76', other95: '1.74', weeks: 25 },
      { key: 26, val1: '26 sem', val2: '0.7', dp: '0.6', p95: '0.8', other50: '1.2', other5: '0.71', other95: '1.69', weeks: 26 },
      { key: 27, val1: '27 sem', val2: '0.69', dp: '0.59', p95: '0.79', other50: '1.16', other5: '0.67', other95: '1.65', weeks: 27 },
      { key: 28, val1: '28 sem', val2: '0.68', dp: '0.58', p95: '0.78', other50: '1.12', other5: '0.63', other95: '1.61', weeks: 28 },
      { key: 29, val1: '29 sem', val2: '0.67', dp: '0.57', p95: '0.77', other50: '1.08', other5: '0.59', other95: '1.57', weeks: 29 },
      { key: 30, val1: '30 sem', val2: '0.66', dp: '0.56', p95: '0.76', other50: '1.05', other5: '0.56', other95: '1.54', weeks: 30 },
      { key: 31, val1: '31 sem', val2: '0.65', dp: '0.55', p95: '0.75', other50: '1.02', other5: '0.53', other95: '1.51', weeks: 31 },
      { key: 32, val1: '32 sem', val2: '0.64', dp: '0.54', p95: '0.74', other50: '0.99', other5: '0.5', other95: '1.48', weeks: 32 },
      { key: 33, val1: '33 sem', val2: '0.63', dp: '0.53', p95: '0.73', other50: '0.97', other5: '0.48', other95: '1.46', weeks: 33 },
      { key: 34, val1: '34 sem', val2: '0.62', dp: '0.52', p95: '0.72', other50: '0.95', other5: '0.46', other95: '1.44', weeks: 34 },
      { key: 35, val1: '35 sem', val2: '0.61', dp: '0.51', p95: '0.71', other50: '0.94', other5: '0.44', other95: '1.43', weeks: 35 },
      { key: 36, val1: '36 sem', val2: '0.6', dp: '0.5', p95: '0.7', other50: '0.92', other5: '0.43', other95: '1.42', weeks: 36 },
      { key: 37, val1: '37 sem', val2: '0.59', dp: '0.49', p95: '0.69', other50: '0.92', other5: '0.42', other95: '1.41', weeks: 37 },
      { key: 38, val1: '38 sem', val2: '0.57', dp: '0.47', p95: '0.67', other50: '0.91', other5: '0.42', other95: '1.4', weeks: 38 },
      { key: 39, val1: '39 sem', val2: '0.56', dp: '0.46', p95: '0.66', other50: '0.91', other5: '0.42', other95: '1.4', weeks: 39 },
      { key: 40, val1: '40 sem', val2: '0.55', dp: '0.45', p95: '0.65', other50: '0.91', other5: '0.42', other95: '1.4', weeks: 40 },
      { key: 41, val1: '41 sem', val2: '0.54', dp: '0.44', p95: '0.64', other50: '0.92', other5: '0.42', other95: '1.41', weeks: 41 },
      { key: 42, val1: '42 sem', val2: '0.53', dp: '0.43', p95: '0.63', other50: '0.93', other5: '0.43', other95: '1.42', weeks: 42 }
    ],
    points: ["O Doppler da Artéria Umbilical reflete a resistência vascular da placenta, caindo gradualmente ao longo da gestação típica.", "A elevação do IP e IR da Artéria Umbilical acima do percentil 95 indica aumento na resistência da placenta (insuficiência placentária).", "Situações extremas incluem diástole zero (ausência de fluxo diastólico final) ou diástole reversa (fluxo retrógrado), associadas a altíssimo risco de óbito fetal."],
    attention: 'Diástole zero ou diástole reversa no Doppler da Artéria Umbilical são emergências obstétricas críticas. Valores de IP/IR acima do percentil 95 exigem acompanhamento Dopplerfluxométrico frequente.',
    techniqueTitle: 'Doppler da Artéria Umbilical',
    techniqueDesc: 'Obtenha uma alça livre de cordão umbilical (preferencialmente no terço médio, distante das inserções fetal e placentária). Posicione o volume de amostra de 2mm no interior do lúmen arterial. Reduza o filtro de parede para menos de 50-100Hz. Obtenha 3 a 5 ondas consecutivas e estáveis.',
    scanningDetails: [{"title": "Alça livre", "desc": "Evitar medições próximas às inserções fetal e placentária para obter ondas de fluxo padrão."}, {"title": "Filtros e Ganhos", "desc": "Ajustar o filtro de parede baixo para não obliterar a porção diastólica final."}, {"title": "Sem movimentos", "desc": "Garantir a ausência de movimentos respiratórios ou corporais do feto durante a aquisição."}]
  },
  umero: {
    title: 'Comprimento do Úmero',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'OSSOS LONGOS',
    imageKey: 'medultra_umero.png',
    tableDesc: 'Percentis de normalidade para o Comprimento Umeral (mm) por Idade Gestacional (semanas) baseados nas curvas clássicas de referência.',
    tableHeaders: ['IG (sem)', 'Percentil 50 (mm)', 'Percentil 3 (mm)', 'Percentil 97 (mm)'],
    tableData: [
      { key: 12, val1: '12 sem', val2: '7.1 mm', dp: '3.7 mm', p97: '10.6 mm', weeks: 12, p50Val: 7.1, p3Val: 3.7, p97Val: 10.6 },
      { key: 13, val1: '13 sem', val2: '10.7 mm', dp: '7.2 mm', p97: '14.2 mm', weeks: 13, p50Val: 10.7, p3Val: 7.2, p97Val: 14.2 },
      { key: 14, val1: '14 sem', val2: '14.1 mm', dp: '10.5 mm', p97: '17.7 mm', weeks: 14, p50Val: 14.1, p3Val: 10.5, p97Val: 17.7 },
      { key: 15, val1: '15 sem', val2: '17.3 mm', dp: '13.7 mm', p97: '2.1 mm', weeks: 15, p50Val: 17.3, p3Val: 13.7, p97Val: 2.1 },
      { key: 16, val1: '16 sem', val2: '20.4 mm', dp: '16.7 mm', p97: '24.2 mm', weeks: 16, p50Val: 20.4, p3Val: 16.7, p97Val: 24.2 },
      { key: 17, val1: '17 sem', val2: '23.4 mm', dp: '19.6 mm', p97: '27.2 mm', weeks: 17, p50Val: 23.4, p3Val: 19.6, p97Val: 27.2 },
      { key: 18, val1: '18 sem', val2: '26.2 mm', dp: '22.3 mm', p97: '30.1 mm', weeks: 18, p50Val: 26.2, p3Val: 22.3, p97Val: 30.1 },
      { key: 19, val1: '19 sem', val2: '28.9 mm', dp: '24.9 mm', p97: '32.9 mm', weeks: 19, p50Val: 28.9, p3Val: 24.9, p97Val: 32.9 },
      { key: 20, val1: '20 sem', val2: '31.5 mm', dp: '27.4 mm', p97: '35.5 mm', weeks: 20, p50Val: 31.5, p3Val: 27.4, p97Val: 35.5 },
      { key: 21, val1: '21 sem', val2: '3.4 mm', dp: '29.8 mm', p97: '38.1 mm', weeks: 21, p50Val: 3.4, p3Val: 29.8, p97Val: 38.1 },
      { key: 22, val1: '22 sem', val2: '36.3 mm', dp: '32.1 mm', p97: '40.5 mm', weeks: 22, p50Val: 36.3, p3Val: 32.1, p97Val: 40.5 },
      { key: 23, val1: '23 sem', val2: '38.6 mm', dp: '34.3 mm', p97: '42.9 mm', weeks: 23, p50Val: 38.6, p3Val: 34.3, p97Val: 42.9 },
      { key: 24, val1: '24 sem', val2: '40.7 mm', dp: '36.4 mm', p97: '45.1 mm', weeks: 24, p50Val: 40.7, p3Val: 36.4, p97Val: 45.1 },
      { key: 25, val1: '25 sem', val2: '42.8 mm', dp: '38.4 mm', p97: '47.2 mm', weeks: 25, p50Val: 42.8, p3Val: 38.4, p97Val: 47.2 },
      { key: 26, val1: '26 sem', val2: '44.8 mm', dp: '40.3 mm', p97: '49.3 mm', weeks: 26, p50Val: 44.8, p3Val: 40.3, p97Val: 49.3 },
      { key: 27, val1: '27 sem', val2: '46.7 mm', dp: '42.1 mm', p97: '51.3 mm', weeks: 27, p50Val: 46.7, p3Val: 42.1, p97Val: 51.3 },
      { key: 28, val1: '28 sem', val2: '48.5 mm', dp: '43.9 mm', p97: '53.2 mm', weeks: 28, p50Val: 48.5, p3Val: 43.9, p97Val: 53.2 },
      { key: 29, val1: '29 sem', val2: '50.2 mm', dp: '45.5 mm', p97: '5.5 mm', weeks: 29, p50Val: 50.2, p3Val: 45.5, p97Val: 5.5 },
      { key: 30, val1: '30 sem', val2: '51.9 mm', dp: '47.1 mm', p97: '56.7 mm', weeks: 30, p50Val: 51.9, p3Val: 47.1, p97Val: 56.7 },
      { key: 31, val1: '31 sem', val2: '53.5 mm', dp: '48.6 mm', p97: '58.4 mm', weeks: 31, p50Val: 53.5, p3Val: 48.6, p97Val: 58.4 },
      { key: 32, val1: '32 sem', val2: '5.5 mm', dp: '5.0 mm', p97: '59.9 mm', weeks: 32, p50Val: 5.5, p3Val: 5.0, p97Val: 59.9 },
      { key: 33, val1: '33 sem', val2: '56.4 mm', dp: '51.4 mm', p97: '61.5 mm', weeks: 33, p50Val: 56.4, p3Val: 51.4, p97Val: 61.5 },
      { key: 34, val1: '34 sem', val2: '57.8 mm', dp: '52.7 mm', p97: '62.9 mm', weeks: 34, p50Val: 57.8, p3Val: 52.7, p97Val: 62.9 },
      { key: 35, val1: '35 sem', val2: '59.1 mm', dp: '53.9 mm', p97: '64.3 mm', weeks: 35, p50Val: 59.1, p3Val: 53.9, p97Val: 64.3 },
      { key: 36, val1: '36 sem', val2: '60.3 mm', dp: '55.1 mm', p97: '65.6 mm', weeks: 36, p50Val: 60.3, p3Val: 55.1, p97Val: 65.6 },
      { key: 37, val1: '37 sem', val2: '61.5 mm', dp: '56.2 mm', p97: '66.8 mm', weeks: 37, p50Val: 61.5, p3Val: 56.2, p97Val: 66.8 },
      { key: 38, val1: '38 sem', val2: '62.6 mm', dp: '57.2 mm', p97: '6.8 mm', weeks: 38, p50Val: 62.6, p3Val: 57.2, p97Val: 6.8 },
      { key: 39, val1: '39 sem', val2: '63.7 mm', dp: '58.2 mm', p97: '69.2 mm', weeks: 39, p50Val: 63.7, p3Val: 58.2, p97Val: 69.2 },
      { key: 40, val1: '40 sem', val2: '64.7 mm', dp: '59.1 mm', p97: '70.3 mm', weeks: 40, p50Val: 64.7, p3Val: 59.1, p97Val: 70.3 },
      { key: 41, val1: '41 sem', val2: '65.6 mm', dp: '6.0 mm', p97: '71.3 mm', weeks: 41, p50Val: 65.6, p3Val: 6.0, p97Val: 71.3 },
      { key: 42, val1: '42 sem', val2: '66.5 mm', dp: '60.8 mm', p97: '72.2 mm', weeks: 42, p50Val: 66.5, p3Val: 60.8, p97Val: 72.2 }
    ],
    points: ["O comprimento do Comprimento do Úmero é medido para avaliar a proporcionalidade do esqueleto e afastar suspeitas de encurtamentos ou displasias.", "Valores abaixo do percentil 3 do comprimento do Comprimento do Úmero exigem atenção para afastar displasias esqueléticas ou restrição de crescimento.", "A relação comprimento do fêmur/comprimento do osso longo avalia a harmonia corporal."],
    attention: 'Comprimento do Comprimento do Úmero abaixo do percentil 3 ou encurtamento grave isolado indica suspeita de displasia esquelética e requer avaliação morfológica ultrassonográfica minuciosa.',
    techniqueTitle: 'Eixo Longitudinal do Comprimento do Úmero',
    techniqueDesc: 'Coloque o transdutor paralelo ao maior eixo do osso (Comprimento do Úmero). Identifique as duas extremidades da diáfise ossificada. Posicione os calipers estritamente de ponta a ponta na porção óssea densa (diáfise), sem incluir epífises cartilaginosas não ossificadas.',
    scanningDetails: [{"title": "Alinhamento", "desc": "O osso deve estar posicionado na horizontal da tela para garantir exatidão na focagem."}, {"title": "Caliper na diáfise", "desc": "Medir apenas a porção densa e hiperecogênica ossificada."}, {"title": "Sem artefatos", "desc": "Evitar sombras acústicas laterais que possam mascarar o real tamanho do osso."}]
  },
  radio: {
    title: 'Comprimento do Rádio',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'OSSOS LONGOS',
    imageKey: 'medultra_radio.png',
    tableDesc: 'Percentis de normalidade para o Comprimento Radial (mm) por Idade Gestacional (semanas) baseados nas curvas clássicas de referência.',
    tableHeaders: ['IG (sem)', 'Percentil 50 (mm)', 'Percentil 3 (mm)', 'Percentil 97 (mm)'],
    tableData: [
      { key: 12, val1: '12 sem', val2: '5.5 mm', dp: '2.2 mm', p97: '8.8 mm', weeks: 12, p50Val: 5.5, p3Val: 2.2, p97Val: 8.8 },
      { key: 13, val1: '13 sem', val2: '8.2 mm', dp: '4.8 mm', p97: '11.6 mm', weeks: 13, p50Val: 8.2, p3Val: 4.8, p97Val: 11.6 },
      { key: 14, val1: '14 sem', val2: '11 mm', dp: '7.6 mm', p97: '14.5 mm', weeks: 14, p50Val: 11, p3Val: 7.6, p97Val: 14.5 },
      { key: 15, val1: '15 sem', val2: '13.9 mm', dp: '10.3 mm', p97: '17.4 mm', weeks: 15, p50Val: 13.9, p3Val: 10.3, p97Val: 17.4 },
      { key: 16, val1: '16 sem', val2: '16.7 mm', dp: '13 mm', p97: '20.3 mm', weeks: 16, p50Val: 16.7, p3Val: 13, p97Val: 20.3 },
      { key: 17, val1: '17 sem', val2: '19.3 mm', dp: '15.6 mm', p97: '23.1 mm', weeks: 17, p50Val: 19.3, p3Val: 15.6, p97Val: 23.1 },
      { key: 18, val1: '18 sem', val2: '21.9 mm', dp: '18.1 mm', p97: '25.7 mm', weeks: 18, p50Val: 21.9, p3Val: 18.1, p97Val: 25.7 },
      { key: 19, val1: '19 sem', val2: '24.4 mm', dp: '20.4 mm', p97: '28.3 mm', weeks: 19, p50Val: 24.4, p3Val: 20.4, p97Val: 28.3 },
      { key: 20, val1: '20 sem', val2: '26.7 mm', dp: '22.7 mm', p97: '30.7 mm', weeks: 20, p50Val: 26.7, p3Val: 22.7, p97Val: 30.7 },
      { key: 21, val1: '21 sem', val2: '28.9 mm', dp: '24.8 mm', p97: '32.9 mm', weeks: 21, p50Val: 28.9, p3Val: 24.8, p97Val: 32.9 },
      { key: 22, val1: '22 sem', val2: '30.9 mm', dp: '26.8 mm', p97: '35.1 mm', weeks: 22, p50Val: 30.9, p3Val: 26.8, p97Val: 35.1 },
      { key: 23, val1: '23 sem', val2: '32.9 mm', dp: '32.9 mm', p97: '37.1 mm', weeks: 23, p50Val: 32.9, p3Val: 32.9, p97Val: 37.1 },
      { key: 24, val1: '24 sem', val2: '34.7 mm', dp: '30.4 mm', p97: '39.1 mm', weeks: 24, p50Val: 34.7, p3Val: 30.4, p97Val: 39.1 },
      { key: 25, val1: '25 sem', val2: '36.5 mm', dp: '32 mm', p97: '40.9 mm', weeks: 25, p50Val: 36.5, p3Val: 32, p97Val: 40.9 },
      { key: 26, val1: '26 sem', val2: '38.1 mm', dp: '33.6 mm', p97: '42.6 mm', weeks: 26, p50Val: 38.1, p3Val: 33.6, p97Val: 42.6 },
      { key: 27, val1: '27 sem', val2: '39.7 mm', dp: '35.1 mm', p97: '44.3 mm', weeks: 27, p50Val: 39.7, p3Val: 35.1, p97Val: 44.3 },
      { key: 28, val1: '28 sem', val2: '41.2 mm', dp: '36.5 mm', p97: '45.8 mm', weeks: 28, p50Val: 41.2, p3Val: 36.5, p97Val: 45.8 },
      { key: 29, val1: '29 sem', val2: '42.6 mm', dp: '37.8 mm', p97: '47.3 mm', weeks: 29, p50Val: 42.6, p3Val: 37.8, p97Val: 47.3 },
      { key: 30, val1: '30 sem', val2: '43.9 mm', dp: '39 mm', p97: '48.7 mm', weeks: 30, p50Val: 43.9, p3Val: 39, p97Val: 48.7 },
      { key: 31, val1: '31 sem', val2: '45.1 mm', dp: '40.2 mm', p97: '50.1 mm', weeks: 31, p50Val: 45.1, p3Val: 40.2, p97Val: 50.1 },
      { key: 32, val1: '32 sem', val2: '46.4 mm', dp: '41.3 mm', p97: '51.4 mm', weeks: 32, p50Val: 46.4, p3Val: 41.3, p97Val: 51.4 },
      { key: 33, val1: '33 sem', val2: '47.5 mm', dp: '42.4 mm', p97: '52.6 mm', weeks: 33, p50Val: 47.5, p3Val: 42.4, p97Val: 52.6 },
      { key: 34, val1: '34 sem', val2: '48.6 mm', dp: '43.4 mm', p97: '53.8 mm', weeks: 34, p50Val: 48.6, p3Val: 43.4, p97Val: 53.8 },
      { key: 35, val1: '35 sem', val2: '49.6 mm', dp: '44.3 mm', p97: '54.9 mm', weeks: 35, p50Val: 49.6, p3Val: 44.3, p97Val: 54.9 },
      { key: 36, val1: '36 sem', val2: '50.6 mm', dp: '45.2 mm', p97: '56 mm', weeks: 36, p50Val: 50.6, p3Val: 45.2, p97Val: 56 },
      { key: 37, val1: '37 sem', val2: '51.6 mm', dp: '46.1 mm', p97: '57 mm', weeks: 37, p50Val: 51.6, p3Val: 46.1, p97Val: 57 },
      { key: 38, val1: '38 sem', val2: '52.5 mm', dp: '46.9 mm', p97: '58 mm', weeks: 38, p50Val: 52.5, p3Val: 46.9, p97Val: 58 },
      { key: 39, val1: '39 sem', val2: '53.3 mm', dp: '47.7 mm', p97: '59 mm', weeks: 39, p50Val: 53.3, p3Val: 47.7, p97Val: 59 },
      { key: 40, val1: '40 sem', val2: '54.2 mm', dp: '48.4 mm', p97: '59.9 mm', weeks: 40, p50Val: 54.2, p3Val: 48.4, p97Val: 59.9 },
      { key: 41, val1: '41 sem', val2: '55 mm', dp: '49.1 mm', p97: '60.8 mm', weeks: 41, p50Val: 55, p3Val: 49.1, p97Val: 60.8 },
      { key: 42, val1: '42 sem', val2: '55.7 mm', dp: '49.8 mm', p97: '61.6 mm', weeks: 42, p50Val: 55.7, p3Val: 49.8, p97Val: 61.6 }
    ],
    points: ["O comprimento do Comprimento do Rádio é medido para avaliar a proporcionalidade do esqueleto e afastar suspeitas de encurtamentos ou displasias.", "Valores abaixo do percentil 3 do comprimento do Comprimento do Rádio exigem atenção para afastar displasias esqueléticas ou restrição de crescimento.", "A relação comprimento do fêmur/comprimento do osso longo avalia a harmonia corporal."],
    attention: 'Comprimento do Comprimento do Rádio abaixo do percentil 3 ou encurtamento grave isolado indica suspeita de displasia esquelética e requer avaliação morfológica ultrassonográfica minuciosa.',
    techniqueTitle: 'Eixo Longitudinal do Comprimento do Rádio',
    techniqueDesc: 'Coloque o transdutor paralelo ao maior eixo do osso (Comprimento do Rádio). Identifique as duas extremidades da diáfise ossificada. Posicione os calipers estritamente de ponta a ponta na porção óssea densa (diáfise), sem incluir epífises cartilaginosas não ossificadas.',
    scanningDetails: [{"title": "Alinhamento", "desc": "O osso deve estar posicionado na horizontal da tela para garantir exatidão na focagem."}, {"title": "Caliper na diáfise", "desc": "Medir apenas a porção densa e hiperecogênica ossificada."}, {"title": "Sem artefatos", "desc": "Evitar sombras acústicas laterais que possam mascarar o real tamanho do osso."}]
  },
  ulna: {
    title: 'Comprimento da Ulna',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'OSSOS LONGOS',
    imageKey: 'medultra_ulna.png',
    tableDesc: 'Percentis de normalidade para o Comprimento Cubital (mm) por Idade Gestacional (semanas) baseados nas curvas clássicas de referência.',
    tableHeaders: ['IG (sem)', 'Percentil 50 (mm)', 'Percentil 3 (mm)', 'Percentil 97 (mm)'],
    tableData: [
      { key: 12, val1: '12 sem', val2: '7.3 mm', dp: '3.9 mm', p97: '10.7 mm', weeks: 12, p50Val: 7.3, p3Val: 3.9, p97Val: 10.7 },
      { key: 13, val1: '13 sem', val2: '9.6 mm', dp: '6.2 mm', p97: '13.1 mm', weeks: 13, p50Val: 9.6, p3Val: 6.2, p97Val: 13.1 },
      { key: 14, val1: '14 sem', val2: '12.4 mm', dp: '8.8 mm', p97: '15.9 mm', weeks: 14, p50Val: 12.4, p3Val: 8.8, p97Val: 15.9 },
      { key: 15, val1: '15 sem', val2: '15.3 mm', dp: '11.6 mm', p97: '18.9 mm', weeks: 15, p50Val: 15.3, p3Val: 11.6, p97Val: 18.9 },
      { key: 16, val1: '16 sem', val2: '18.2 mm', dp: '14.5 mm', p97: '22 mm', weeks: 16, p50Val: 18.2, p3Val: 14.5, p97Val: 22 },
      { key: 17, val1: '17 sem', val2: '21.2 mm', dp: '17.3 mm', p97: '25 mm', weeks: 17, p50Val: 21.2, p3Val: 17.3, p97Val: 25 },
      { key: 18, val1: '18 sem', val2: '24 mm', dp: '20.1 mm', p97: '28 mm', weeks: 18, p50Val: 24, p3Val: 20.1, p97Val: 28 },
      { key: 19, val1: '19 sem', val2: '26.8 mm', dp: '22.8 mm', p97: '30.8 mm', weeks: 19, p50Val: 26.8, p3Val: 22.8, p97Val: 30.8 },
      { key: 20, val1: '20 sem', val2: '29.4 mm', dp: '25.3 mm', p97: '33.5 mm', weeks: 20, p50Val: 29.4, p3Val: 25.3, p97Val: 33.5 },
      { key: 21, val1: '21 sem', val2: '32 mm', dp: '27.8 mm', p97: '36.2 mm', weeks: 21, p50Val: 32, p3Val: 27.8, p97Val: 36.2 },
      { key: 22, val1: '22 sem', val2: '34.4 mm', dp: '30.1 mm', p97: '38.7 mm', weeks: 22, p50Val: 34.4, p3Val: 30.1, p97Val: 38.7 },
      { key: 23, val1: '23 sem', val2: '36.6 mm', dp: '32.3 mm', p97: '41 mm', weeks: 23, p50Val: 36.6, p3Val: 32.3, p97Val: 41 },
      { key: 24, val1: '24 sem', val2: '38.8 mm', dp: '34.3 mm', p97: '43.3 mm', weeks: 24, p50Val: 38.8, p3Val: 34.3, p97Val: 43.3 },
      { key: 25, val1: '25 sem', val2: '40.9 mm', dp: '36.3 mm', p97: '45.5 mm', weeks: 25, p50Val: 40.9, p3Val: 36.3, p97Val: 45.5 },
      { key: 26, val1: '26 sem', val2: '42.8 mm', dp: '38.2 mm', p97: '47.5 mm', weeks: 26, p50Val: 42.8, p3Val: 38.2, p97Val: 47.5 },
      { key: 27, val1: '27 sem', val2: '44.7 mm', dp: '39.9 mm', p97: '49.5 mm', weeks: 27, p50Val: 44.7, p3Val: 39.9, p97Val: 49.5 },
      { key: 28, val1: '28 sem', val2: '46.5 mm', dp: '41.6 mm', p97: '51.3 mm', weeks: 28, p50Val: 46.5, p3Val: 41.6, p97Val: 51.3 },
      { key: 29, val1: '29 sem', val2: '48.2 mm', dp: '43.2 mm', p97: '53.1 mm', weeks: 29, p50Val: 48.2, p3Val: 43.2, p97Val: 53.1 },
      { key: 30, val1: '30 sem', val2: '49.8 mm', dp: '44.7 mm', p97: '54.8 mm', weeks: 30, p50Val: 49.8, p3Val: 44.7, p97Val: 54.8 },
      { key: 31, val1: '31 sem', val2: '51.3 mm', dp: '46.2 mm', p97: '56.4 mm', weeks: 31, p50Val: 51.3, p3Val: 46.2, p97Val: 56.4 },
      { key: 32, val1: '32 sem', val2: '52.7 mm', dp: '47.5 mm', p97: '58 mm', weeks: 32, p50Val: 52.7, p3Val: 47.5, p97Val: 58 },
      { key: 33, val1: '33 sem', val2: '54.1 mm', dp: '48.8 mm', p97: '59.4 mm', weeks: 33, p50Val: 54.1, p3Val: 48.8, p97Val: 59.4 },
      { key: 34, val1: '34 sem', val2: '55.4 mm', dp: '50 mm', p97: '60.8 mm', weeks: 34, p50Val: 55.4, p3Val: 50, p97Val: 60.8 },
      { key: 35, val1: '35 sem', val2: '56.7 mm', dp: '51.2 mm', p97: '62.2 mm', weeks: 35, p50Val: 56.7, p3Val: 51.2, p97Val: 62.2 },
      { key: 36, val1: '36 sem', val2: '57.9 mm', dp: '52.3 mm', p97: '63.5 mm', weeks: 36, p50Val: 57.9, p3Val: 52.3, p97Val: 63.5 },
      { key: 37, val1: '37 sem', val2: '59.1 mm', dp: '53.4 mm', p97: '64.7 mm', weeks: 37, p50Val: 59.1, p3Val: 53.4, p97Val: 64.7 },
      { key: 38, val1: '38 sem', val2: '60.2 mm', dp: '54.4 mm', p97: '65.9 mm', weeks: 38, p50Val: 60.2, p3Val: 54.4, p97Val: 65.9 },
      { key: 39, val1: '39 sem', val2: '61.2 mm', dp: '55.4 mm', p97: '67.1 mm', weeks: 39, p50Val: 61.2, p3Val: 55.4, p97Val: 67.1 },
      { key: 40, val1: '40 sem', val2: '62.2 mm', dp: '56.3 mm', p97: '68.2 mm', weeks: 40, p50Val: 62.2, p3Val: 56.3, p97Val: 68.2 },
      { key: 41, val1: '41 sem', val2: '63.2 mm', dp: '57.2 mm', p97: '69.3 mm', weeks: 41, p50Val: 63.2, p3Val: 57.2, p97Val: 69.3 },
      { key: 42, val1: '42 sem', val2: '64.1 mm', dp: '58 mm', p97: '70.3 mm', weeks: 42, p50Val: 64.1, p3Val: 58, p97Val: 70.3 }
    ],
    points: ["O comprimento do Comprimento da Ulna é medido para avaliar a proporcionalidade do esqueleto e afastar suspeitas de encurtamentos ou displasias.", "Valores abaixo do percentil 3 do comprimento do Comprimento da Ulna exigem atenção para afastar displasias esqueléticas ou restrição de crescimento.", "A relação comprimento do fêmur/comprimento do osso longo avalia a harmonia corporal."],
    attention: 'Comprimento do Comprimento da Ulna abaixo do percentil 3 ou encurtamento grave isolado indica suspeita de displasia esquelética e requer avaliação morfológica ultrassonográfica minuciosa.',
    techniqueTitle: 'Eixo Longitudinal do Comprimento da Ulna',
    techniqueDesc: 'Coloque o transdutor paralelo ao maior eixo do osso (Comprimento da Ulna). Identifique as duas extremidades da diáfise ossificada. Posicione os calipers estritamente de ponta a ponta na porção óssea densa (diáfise), sem incluir epífises cartilaginosas não ossificadas.',
    scanningDetails: [{"title": "Alinhamento", "desc": "O osso deve estar posicionado na horizontal da tela para garantir exatidão na focagem."}, {"title": "Caliper na diáfise", "desc": "Medir apenas a porção densa e hiperecogênica ossificada."}, {"title": "Sem artefatos", "desc": "Evitar sombras acústicas laterais que possam mascarar o real tamanho do osso."}]
  },
  tibia: {
    title: 'Comprimento da Tíbia',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'OSSOS LONGOS',
    imageKey: 'medultra_tibia.png',
    tableDesc: 'Percentis de normalidade para o Comprimento Tibial (mm) por Idade Gestacional (semanas) baseados nas curvas clássicas de referência.',
    tableHeaders: ['IG (sem)', 'Percentil 50 (mm)', 'Percentil 3 (mm)', 'Percentil 97 (mm)'],
    tableData: [
      { key: 12, val1: '12 sem', val2: '7.6 mm', dp: '4.4 mm', p97: '10.8 mm', weeks: 12, p50Val: 7.6, p3Val: 4.4, p97Val: 10.8 },
      { key: 13, val1: '13 sem', val2: '9.2 mm', dp: '5.8 mm', p97: '12.5 mm', weeks: 13, p50Val: 9.2, p3Val: 5.8, p97Val: 12.5 },
      { key: 14, val1: '14 sem', val2: '11.4 mm', dp: '8 mm', p97: '12.5 mm', weeks: 14, p50Val: 11.4, p3Val: 8, p97Val: 12.5 },
      { key: 15, val1: '15 sem', val2: '14.1 mm', dp: '10.6 mm', p97: '17.6 mm', weeks: 15, p50Val: 14.1, p3Val: 10.6, p97Val: 17.6 },
      { key: 16, val1: '16 sem', val2: '16.9 mm', dp: '13.3 mm', p97: '20.5 mm', weeks: 16, p50Val: 16.9, p3Val: 13.3, p97Val: 20.5 },
      { key: 17, val1: '17 sem', val2: '19.9 mm', dp: '16.2 mm', p97: '23.5 mm', weeks: 17, p50Val: 19.9, p3Val: 16.2, p97Val: 23.5 },
      { key: 18, val1: '18 sem', val2: '22.8 mm', dp: '19 mm', p97: '26.6 mm', weeks: 18, p50Val: 22.8, p3Val: 19, p97Val: 26.6 },
      { key: 19, val1: '19 sem', val2: '25.7 mm', dp: '21.8 mm', p97: '29.6 mm', weeks: 19, p50Val: 25.7, p3Val: 21.8, p97Val: 29.6 },
      { key: 20, val1: '20 sem', val2: '28.5 mm', dp: '24.5 mm', p97: '32.5 mm', weeks: 20, p50Val: 28.5, p3Val: 24.5, p97Val: 32.5 },
      { key: 21, val1: '21 sem', val2: '31.2 mm', dp: '27.2 mm', p97: '35.3 mm', weeks: 21, p50Val: 31.2, p3Val: 27.2, p97Val: 35.3 },
      { key: 22, val1: '22 sem', val2: '33.8 mm', dp: '29.7 mm', p97: '38 mm', weeks: 22, p50Val: 33.8, p3Val: 29.7, p97Val: 38 },
      { key: 23, val1: '23 sem', val2: '36.4 mm', dp: '32.1 mm', p97: '40.6 mm', weeks: 23, p50Val: 36.4, p3Val: 32.1, p97Val: 40.6 },
      { key: 24, val1: '24 sem', val2: '38.8 mm', dp: '34.4 mm', p97: '43.1 mm', weeks: 24, p50Val: 38.8, p3Val: 34.4, p97Val: 43.1 },
      { key: 25, val1: '25 sem', val2: '41 mm', dp: '36.6 mm', p97: '45.5 mm', weeks: 25, p50Val: 41, p3Val: 36.6, p97Val: 45.5 },
      { key: 26, val1: '26 sem', val2: '43.2 mm', dp: '38.7 mm', p97: '47.8 mm', weeks: 26, p50Val: 43.2, p3Val: 38.7, p97Val: 47.8 },
      { key: 27, val1: '27 sem', val2: '45.3 mm', dp: '40.7 mm', p97: '49.9 mm', weeks: 27, p50Val: 45.3, p3Val: 40.7, p97Val: 49.9 },
      { key: 28, val1: '28 sem', val2: '47.3 mm', dp: '42.6 mm', p97: '52 mm', weeks: 28, p50Val: 47.3, p3Val: 42.6, p97Val: 52 },
      { key: 29, val1: '29 sem', val2: '49.2 mm', dp: '44.4 mm', p97: '54 mm', weeks: 29, p50Val: 49.2, p3Val: 44.4, p97Val: 54 },
      { key: 30, val1: '30 sem', val2: '51 mm', dp: '46.1 mm', p97: '55.9 mm', weeks: 30, p50Val: 51, p3Val: 46.1, p97Val: 55.9 },
      { key: 31, val1: '31 sem', val2: '52.7 mm', dp: '47.7 mm', p97: '57.7 mm', weeks: 31, p50Val: 52.7, p3Val: 47.7, p97Val: 57.7 },
      { key: 32, val1: '32 sem', val2: '54.4 mm', dp: '49.3 mm', p97: '59.5 mm', weeks: 32, p50Val: 54.4, p3Val: 49.3, p97Val: 59.5 },
      { key: 33, val1: '33 sem', val2: '55.9 mm', dp: '50.8 mm', p97: '61.1 mm', weeks: 33, p50Val: 55.9, p3Val: 50.8, p97Val: 61.1 },
      { key: 34, val1: '34 sem', val2: '57.5 mm', dp: '53.9 mm', p97: '62.7 mm', weeks: 34, p50Val: 57.5, p3Val: 53.9, p97Val: 62.7 },
      { key: 35, val1: '35 sem', val2: '58.9 mm', dp: '53.5 mm', p97: '64.3 mm', weeks: 35, p50Val: 58.9, p3Val: 53.5, p97Val: 64.3 },
      { key: 36, val1: '36 sem', val2: '60.3 mm', dp: '54.8 mm', p97: '65.7 mm', weeks: 36, p50Val: 60.3, p3Val: 54.8, p97Val: 65.7 },
      { key: 37, val1: '37 sem', val2: '61.6 mm', dp: '56 mm', p97: '67.2 mm', weeks: 37, p50Val: 61.6, p3Val: 56, p97Val: 67.2 },
      { key: 38, val1: '38 sem', val2: '62.9 mm', dp: '57.2 mm', p97: '68.5 mm', weeks: 38, p50Val: 62.9, p3Val: 57.2, p97Val: 68.5 },
      { key: 39, val1: '39 sem', val2: '64.1 mm', dp: '58.3 mm', p97: '69.8 mm', weeks: 39, p50Val: 64.1, p3Val: 58.3, p97Val: 69.8 },
      { key: 40, val1: '40 sem', val2: '65.2 mm', dp: '59.4 mm', p97: '71.1 mm', weeks: 40, p50Val: 65.2, p3Val: 59.4, p97Val: 71.1 },
      { key: 41, val1: '41 sem', val2: '66.4 mm', dp: '60.4 mm', p97: '72.3 mm', weeks: 41, p50Val: 66.4, p3Val: 60.4, p97Val: 72.3 },
      { key: 42, val1: '42 sem', val2: '67.4 mm', dp: '61.4 mm', p97: '73.5 mm', weeks: 42, p50Val: 67.4, p3Val: 61.4, p97Val: 73.5 }
    ],
    points: ["O comprimento do Comprimento da Tíbia é medido para avaliar a proporcionalidade do esqueleto e afastar suspeitas de encurtamentos ou displasias.", "Valores abaixo do percentil 3 do comprimento do Comprimento da Tíbia exigem atenção para afastar displasias esqueléticas ou restrição de crescimento.", "A relação comprimento do fêmur/comprimento do osso longo avalia a harmonia corporal."],
    attention: 'Comprimento do Comprimento da Tíbia abaixo do percentil 3 ou encurtamento grave isolado indica suspeita de displasia esquelética e requer avaliação morfológica ultrassonográfica minuciosa.',
    techniqueTitle: 'Eixo Longitudinal do Comprimento da Tíbia',
    techniqueDesc: 'Coloque o transdutor paralelo ao maior eixo do osso (Comprimento da Tíbia). Identifique as duas extremidades da diáfise ossificada. Posicione os calipers estritamente de ponta a ponta na porção óssea densa (diáfise), sem incluir epífises cartilaginosas não ossificadas.',
    scanningDetails: [{"title": "Alinhamento", "desc": "O osso deve estar posicionado na horizontal da tela para garantir exatidão na focagem."}, {"title": "Caliper na diáfise", "desc": "Medir apenas a porção densa e hiperecogênica ossificada."}, {"title": "Sem artefatos", "desc": "Evitar sombras acústicas laterais que possam mascarar o real tamanho do osso."}]
  },
  fibula: {
    title: 'Comprimento da Fíbula',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'OSSOS LONGOS',
    imageKey: 'medultra_fibula.png',
    tableDesc: 'Percentis de normalidade para o Comprimento Fibular (mm) por Idade Gestacional (semanas) baseados nas curvas clássicas de referência.',
    tableHeaders: ['IG (sem)', 'Percentil 50 (mm)', 'Percentil 3 (mm)', 'Percentil 97 (mm)'],
    tableData: [
      { key: 12, val1: '12 sem', val2: '6.8 mm', dp: '3.6 mm', p97: '10 mm', weeks: 12, p50Val: 6.8, p3Val: 3.6, p97Val: 10 },
      { key: 13, val1: '13 sem', val2: '8.5 mm', dp: '5.2 mm', p97: '11.8 mm', weeks: 13, p50Val: 8.5, p3Val: 5.2, p97Val: 11.8 },
      { key: 14, val1: '14 sem', val2: '10.8 mm', dp: '7.4 mm', p97: '14.2 mm', weeks: 14, p50Val: 10.8, p3Val: 7.4, p97Val: 14.2 },
      { key: 15, val1: '15 sem', val2: '13.5 mm', dp: '10 mm', p97: '17 mm', weeks: 15, p50Val: 13.5, p3Val: 10, p97Val: 17 },
      { key: 16, val1: '16 sem', val2: '16.4 mm', dp: '12.8 mm', p97: '20 mm', weeks: 16, p50Val: 16.4, p3Val: 12.8, p97Val: 20 },
      { key: 17, val1: '17 sem', val2: '19.3 mm', dp: '15.6 mm', p97: '23 mm', weeks: 17, p50Val: 19.3, p3Val: 15.6, p97Val: 23 },
      { key: 18, val1: '18 sem', val2: '22.2 mm', dp: '18.4 mm', p97: '26 mm', weeks: 18, p50Val: 22.2, p3Val: 18.4, p97Val: 26 },
      { key: 19, val1: '19 sem', val2: '25.1 mm', dp: '21.2 mm', p97: '29 mm', weeks: 19, p50Val: 25.1, p3Val: 21.2, p97Val: 29 },
      { key: 20, val1: '20 sem', val2: '27.9 mm', dp: '23.9 mm', p97: '31.8 mm', weeks: 20, p50Val: 27.9, p3Val: 23.9, p97Val: 31.8 },
      { key: 21, val1: '21 sem', val2: '30.5 mm', dp: '26.4 mm', p97: '34.6 mm', weeks: 21, p50Val: 30.5, p3Val: 26.4, p97Val: 34.6 },
      { key: 22, val1: '22 sem', val2: '33.1 mm', dp: '28.9 mm', p97: '37.3 mm', weeks: 22, p50Val: 33.1, p3Val: 28.9, p97Val: 37.3 },
      { key: 23, val1: '23 sem', val2: '35.5 mm', dp: '31.2 mm', p97: '39.8 mm', weeks: 23, p50Val: 35.5, p3Val: 31.2, p97Val: 39.8 },
      { key: 24, val1: '24 sem', val2: '37.9 mm', dp: '33.5 mm', p97: '42.3 mm', weeks: 24, p50Val: 37.9, p3Val: 33.5, p97Val: 42.3 },
      { key: 25, val1: '25 sem', val2: '40.1 mm', dp: '35.6 mm', p97: '44.6 mm', weeks: 25, p50Val: 40.1, p3Val: 35.6, p97Val: 44.6 },
      { key: 26, val1: '26 sem', val2: '42.2 mm', dp: '37.6 mm', p97: '46.8 mm', weeks: 26, p50Val: 42.2, p3Val: 37.6, p97Val: 46.8 },
      { key: 27, val1: '27 sem', val2: '44.3 mm', dp: '3.9 mm', p97: '49 mm', weeks: 27, p50Val: 44.3, p3Val: 3.9, p97Val: 49 },
      { key: 28, val1: '28 sem', val2: '46.2 mm', dp: '41.4 mm', p97: '51 mm', weeks: 28, p50Val: 46.2, p3Val: 41.4, p97Val: 51 },
      { key: 29, val1: '29 sem', val2: '48 mm', dp: '43.1 mm', p97: '52.9 mm', weeks: 29, p50Val: 48, p3Val: 43.1, p97Val: 52.9 },
      { key: 30, val1: '30 sem', val2: '49.8 mm', dp: '44.8 mm', p97: '54.8 mm', weeks: 30, p50Val: 49.8, p3Val: 44.8, p97Val: 54.8 },
      { key: 31, val1: '31 sem', val2: '51.5 mm', dp: '46.4 mm', p97: '56.6 mm', weeks: 31, p50Val: 51.5, p3Val: 46.4, p97Val: 56.6 },
      { key: 32, val1: '32 sem', val2: '53.1 mm', dp: '47.9 mm', p97: '58.3 mm', weeks: 32, p50Val: 53.1, p3Val: 47.9, p97Val: 58.3 },
      { key: 33, val1: '33 sem', val2: '54.6 mm', dp: '49.3 mm', p97: '59.9 mm', weeks: 33, p50Val: 54.6, p3Val: 49.3, p97Val: 59.9 },
      { key: 34, val1: '34 sem', val2: '56.1 mm', dp: '50.7 mm', p97: '61.5 mm', weeks: 34, p50Val: 56.1, p3Val: 50.7, p97Val: 61.5 },
      { key: 35, val1: '35 sem', val2: '57.5 mm', dp: '52 mm', p97: '63 mm', weeks: 35, p50Val: 57.5, p3Val: 52, p97Val: 63 },
      { key: 36, val1: '36 sem', val2: '58.8 mm', dp: '53.2 mm', p97: '64.4 mm', weeks: 36, p50Val: 58.8, p3Val: 53.2, p97Val: 64.4 },
      { key: 37, val1: '37 sem', val2: '60.1 mm', dp: '54.4 mm', p97: '65.8 mm', weeks: 37, p50Val: 60.1, p3Val: 54.4, p97Val: 65.8 },
      { key: 38, val1: '38 sem', val2: '61.3 mm', dp: '55.4 mm', p97: '67.1 mm', weeks: 38, p50Val: 61.3, p3Val: 55.4, p97Val: 67.1 },
      { key: 39, val1: '39 sem', val2: '62.5 mm', dp: '56.6 mm', p97: '68.4 mm', weeks: 39, p50Val: 62.5, p3Val: 56.6, p97Val: 68.4 },
      { key: 40, val1: '40 sem', val2: '63.6 mm', dp: '57.6 mm', p97: '69.6 mm', weeks: 40, p50Val: 63.6, p3Val: 57.6, p97Val: 69.6 },
      { key: 41, val1: '41 sem', val2: '64.7 mm', dp: '58.6 mm', p97: '70.8 mm', weeks: 41, p50Val: 64.7, p3Val: 58.6, p97Val: 70.8 },
      { key: 42, val1: '42 sem', val2: '65.8 mm', dp: '59.5 mm', p97: '72 mm', weeks: 42, p50Val: 65.8, p3Val: 59.5, p97Val: 72 }
    ],
    points: ["O comprimento do Comprimento da Fíbula é medido para avaliar a proporcionalidade do esqueleto e afastar suspeitas de encurtamentos ou displasias.", "Valores abaixo do percentil 3 do comprimento do Comprimento da Fíbula exigem atenção para afastar displasias esqueléticas ou restrição de crescimento.", "A relação comprimento do fêmur/comprimento do osso longo avalia a harmonia corporal."],
    attention: 'Comprimento do Comprimento da Fíbula abaixo do percentil 3 ou encurtamento grave isolado indica suspeita de displasia esquelética e requer avaliação morfológica ultrassonográfica minuciosa.',
    techniqueTitle: 'Eixo Longitudinal do Comprimento da Fíbula',
    techniqueDesc: 'Coloque o transdutor paralelo ao maior eixo do osso (Comprimento da Fíbula). Identifique as duas extremidades da diáfise ossificada. Posicione os calipers estritamente de ponta a ponta na porção óssea densa (diáfise), sem incluir epífises cartilaginosas não ossificadas.',
    scanningDetails: [{"title": "Alinhamento", "desc": "O osso deve estar posicionado na horizontal da tela para garantir exatidão na focagem."}, {"title": "Caliper na diáfise", "desc": "Medir apenas a porção densa e hiperecogênica ossificada."}, {"title": "Sem artefatos", "desc": "Evitar sombras acústicas laterais que possam mascarar o real tamanho do osso."}]
  },
  vl: {
    title: 'Ventrículos Laterais (VL)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'CABEÇA E PESCOÇO',
    imageKey: 'medultra_vl.png',
    tableDesc: 'Percentis de normalidade para o Diâmetro do Ventrículo Lateral (mm) por Idade Gestacional (semanas) baseados nas curvas clássicas de referência.',
    tableHeaders: ['IG (sem)', 'Percentil 50 (mm)', 'Percentil 3 (mm)', 'Percentil 97 (mm)'],
    tableData: [
      { key: 14, val1: '14 sem', val2: '6.7 mm', dp: '5.1 mm', p97: '8.4 mm', weeks: 14, p50Val: 6.7, p3Val: 5.1, p97Val: 8.4 },
      { key: 15, val1: '15 sem', val2: '6.8 mm', dp: '5.1 mm', p97: '8.5 mm', weeks: 15, p50Val: 6.8, p3Val: 5.1, p97Val: 8.5 },
      { key: 16, val1: '16 sem', val2: '6.9 mm', dp: '5.2 mm', p97: '8.6 mm', weeks: 16, p50Val: 6.9, p3Val: 5.2, p97Val: 8.6 },
      { key: 17, val1: '17 sem', val2: '7.0 mm', dp: '5.3 mm', p97: '8.7 mm', weeks: 17, p50Val: 7.0, p3Val: 5.3, p97Val: 8.7 },
      { key: 18, val1: '18 sem', val2: '7.1 mm', dp: '5.4 mm', p97: '8.8 mm', weeks: 18, p50Val: 7.1, p3Val: 5.4, p97Val: 8.8 },
      { key: 19, val1: '19 sem', val2: '7.2 mm', dp: '5.5 mm', p97: '8.8 mm', weeks: 19, p50Val: 7.2, p3Val: 5.5, p97Val: 8.8 },
      { key: 20, val1: '20 sem', val2: '7.2 mm', dp: '5.6 mm', p97: '8.9 mm', weeks: 20, p50Val: 7.2, p3Val: 5.6, p97Val: 8.9 },
      { key: 21, val1: '21 sem', val2: '7.3 mm', dp: '5.6 mm', p97: '9 mm', weeks: 21, p50Val: 7.3, p3Val: 5.6, p97Val: 9 },
      { key: 22, val1: '22 sem', val2: '7.4 mm', dp: '5.7 mm', p97: '9.1 mm', weeks: 22, p50Val: 7.4, p3Val: 5.7, p97Val: 9.1 },
      { key: 23, val1: '23 sem', val2: '7.5 mm', dp: '5.8 mm', p97: '9.2 mm', weeks: 23, p50Val: 7.5, p3Val: 5.8, p97Val: 9.2 },
      { key: 24, val1: '24 sem', val2: '7.6 mm', dp: '5.9 mm', p97: '9.3 mm', weeks: 24, p50Val: 7.6, p3Val: 5.9, p97Val: 9.3 },
      { key: 25, val1: '25 sem', val2: '7.7 mm', dp: '6 mm', p97: '9.3 mm', weeks: 25, p50Val: 7.7, p3Val: 6, p97Val: 9.3 },
      { key: 26, val1: '26 sem', val2: '7.7 mm', dp: '6.1 mm', p97: '9.4 mm', weeks: 26, p50Val: 7.7, p3Val: 6.1, p97Val: 9.4 },
      { key: 27, val1: '27 sem', val2: '7.8 mm', dp: '6.1 mm', p97: '9.5 mm', weeks: 27, p50Val: 7.8, p3Val: 6.1, p97Val: 9.5 },
      { key: 28, val1: '28 sem', val2: '7.9 mm', dp: '6.2 mm', p97: '9.6 mm', weeks: 28, p50Val: 7.9, p3Val: 6.2, p97Val: 9.6 },
      { key: 29, val1: '29 sem', val2: '8.0 mm', dp: '6.3 mm', p97: '9.7 mm', weeks: 29, p50Val: 8.0, p3Val: 6.3, p97Val: 9.7 },
      { key: 30, val1: '30 sem', val2: '8.1 mm', dp: '6.4 mm', p97: '9.8 mm', weeks: 30, p50Val: 8.1, p3Val: 6.4, p97Val: 9.8 },
      { key: 31, val1: '31 sem', val2: '8.2 mm', dp: '6.5 mm', p97: '9.9 mm', weeks: 31, p50Val: 8.2, p3Val: 6.5, p97Val: 9.9 },
      { key: 32, val1: '32 sem', val2: '8.3 mm', dp: '6.6 mm', p97: '9.9 mm', weeks: 32, p50Val: 8.3, p3Val: 6.6, p97Val: 9.9 },
      { key: 33, val1: '33 sem', val2: '8.3 mm', dp: '6.7 mm', p97: '10 mm', weeks: 33, p50Val: 8.3, p3Val: 6.7, p97Val: 10 },
      { key: 34, val1: '34 sem', val2: '8.4 mm', dp: '6.7 mm', p97: '10.1 mm', weeks: 34, p50Val: 8.4, p3Val: 6.7, p97Val: 10.1 },
      { key: 35, val1: '35 sem', val2: '8.5 mm', dp: '6.8 mm', p97: '10.2 mm', weeks: 35, p50Val: 8.5, p3Val: 6.8, p97Val: 10.2 },
      { key: 36, val1: '36 sem', val2: '8.6 mm', dp: '6.9 mm', p97: '10.3 mm', weeks: 36, p50Val: 8.6, p3Val: 6.9, p97Val: 10.3 },
      { key: 37, val1: '37 sem', val2: '8.7 mm', dp: '7 mm', p97: '10.4 mm', weeks: 37, p50Val: 8.7, p3Val: 7, p97Val: 10.4 },
      { key: 38, val1: '38 sem', val2: '8.8 mm', dp: '7.1 mm', p97: '10.4 mm', weeks: 38, p50Val: 8.8, p3Val: 7.1, p97Val: 10.4 },
      { key: 39, val1: '39 sem', val2: '8.8 mm', dp: '7.2 mm', p97: '10.5 mm', weeks: 39, p50Val: 8.8, p3Val: 7.2, p97Val: 10.5 }
    ],
    points: ["A medida do ventrículo lateral é realizada no átrio do ventrículo lateral posterior.", "O diâmetro do ventrículo lateral deve se manter estável e menor que 10mm durante toda a gestação.", "Valores entre 10 e 15mm são classificados como ventriculomegalia leve/moderada, e acima de 15mm como ventriculomegalia grave."],
    attention: 'Diâmetro do ventrículo lateral >= 10mm indica ventriculomegalia, exigindo varredura morfológica fetal detalhada do sistema nervoso central e acompanhamento especializado.',
    techniqueTitle: 'Corte Axial Transventricular',
    techniqueDesc: 'Obtenha um plano transversal simétrico da cabeça fetal. O corte deve passar pelos ventrículos laterais no plano transventricular, ligeiramente superior ao plano trans-talâmico. Posicione os calipers nas margens internas da parede ventricular (inner-to-inner), perpendicular ao maior eixo no átrio posterior, próximo ao plexo coroide.',
    scanningDetails: [{"title": "Simetria", "desc": "Garantir corte transversal cefálico rigorosamente simétrico."}, {"title": "Caliper inner-to-inner", "desc": "Colocar os calipers perpendicularmente nas margens internas das paredes ecogênicas."}, {"title": "Átrio posterior", "desc": "Medir a porção posterior do átrio exatamente no nível da extremidade posterior do plexo coroide."}]
  },
  dtc: {
    title: 'Diâmetro Transcerebelar (DTC)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'CABEÇA E PESCOÇO',
    imageKey: 'medultra_dtc.png',
    tableDesc: 'Curva de crescimento transcerebelar relacionando o diâmetro transcerebelar (DTC) medido em milímetros à idade gestacional estimada (Percentis 5, 50 e 95).',
    tableHeaders: ['DTC (mm)', 'IG P50', 'IG P5 (Mín)', 'IG P95 (Máx)'],
    tableData: [
      { key: 13, val1: '13 mm', val2: '14 sem e 3 dias', dp: '13 sem e 1 dias', p95: '16 sem e 0 dias', dtc: 13, weeks: 14, days: 3, weeksMin: 13, daysMin: 1, weeksMax: 16, daysMax: 0 },
      { key: 14, val1: '14 mm', val2: '15 sem e 3 dias', dp: '14 sem e 0 dias', p95: '16 sem e 6 dias', dtc: 14, weeks: 15, days: 3, weeksMin: 14, daysMin: 0, weeksMax: 16, daysMax: 6 },
      { key: 15, val1: '15 mm', val2: '16 sem e 2 dias', dp: '14 sem e 6 dias', p95: '17 sem e 5 dias', dtc: 15, weeks: 16, days: 2, weeksMin: 14, daysMin: 6, weeksMax: 17, daysMax: 5 },
      { key: 16, val1: '16 mm', val2: '17 sem e 0 dias', dp: '15 sem e 4 dias', p95: '18 sem e 4 dias', dtc: 16, weeks: 17, days: 0, weeksMin: 15, daysMin: 4, weeksMax: 18, daysMax: 4 },
      { key: 17, val1: '17 mm', val2: '17 sem e 6 dias', dp: '16 sem e 3 dias', p95: '19 sem e 3 dias', dtc: 17, weeks: 17, days: 6, weeksMin: 16, daysMin: 3, weeksMax: 19, daysMax: 3 },
      { key: 18, val1: '18 mm', val2: '18 sem e 5 dias', dp: '17 sem e 2 dias', p95: '20 sem e 2 dias', dtc: 18, weeks: 18, days: 5, weeksMin: 17, daysMin: 2, weeksMax: 20, daysMax: 2 },
      { key: 19, val1: '19 mm', val2: '19 sem e 4 dias', dp: '18 sem e 0 dias', p95: '21 sem e 1 dias', dtc: 19, weeks: 19, days: 4, weeksMin: 18, daysMin: 0, weeksMax: 21, daysMax: 1 },
      { key: 20, val1: '20 mm', val2: '20 sem e 3 dias', dp: '18 sem e 6 dias', p95: '22 sem e 0 dias', dtc: 20, weeks: 20, days: 3, weeksMin: 18, daysMin: 6, weeksMax: 22, daysMax: 0 },
      { key: 21, val1: '21 mm', val2: '21 sem e 1 dias', dp: '19 sem e 4 dias', p95: '22 sem e 6 dias', dtc: 21, weeks: 21, days: 1, weeksMin: 19, daysMin: 4, weeksMax: 22, daysMax: 6 },
      { key: 22, val1: '22 mm', val2: '22 sem e 0 dias', dp: '20 sem e 2 dias', p95: '23 sem e 5 dias', dtc: 22, weeks: 22, days: 0, weeksMin: 20, daysMin: 2, weeksMax: 23, daysMax: 5 },
      { key: 23, val1: '23 mm', val2: '22 sem e 5 dias', dp: '21 sem e 0 dias', p95: '24 sem e 4 dias', dtc: 23, weeks: 22, days: 5, weeksMin: 21, daysMin: 0, weeksMax: 24, daysMax: 4 },
      { key: 24, val1: '24 mm', val2: '23 sem e 4 dias', dp: '21 sem e 5 dias', p95: '25 sem e 4 dias', dtc: 24, weeks: 23, days: 4, weeksMin: 21, daysMin: 5, weeksMax: 25, daysMax: 4 },
      { key: 25, val1: '25 mm', val2: '24 sem e 2 dias', dp: '22 sem e 2 dias', p95: '26 sem e 3 dias', dtc: 25, weeks: 24, days: 2, weeksMin: 22, daysMin: 2, weeksMax: 26, daysMax: 3 },
      { key: 26, val1: '26 mm', val2: '25 sem e 0 dias', dp: '23 sem e 0 dias', p95: '27 sem e 3 dias', dtc: 26, weeks: 25, days: 0, weeksMin: 23, daysMin: 0, weeksMax: 27, daysMax: 3 },
      { key: 27, val1: '27 mm', val2: '25 sem e 6 dias', dp: '23 sem e 4 dias', p95: '28 sem e 2 dias', dtc: 27, weeks: 25, days: 6, weeksMin: 23, daysMin: 4, weeksMax: 28, daysMax: 2 },
      { key: 28, val1: '28 mm', val2: '26 sem e 4 dias', dp: '24 sem e 1 dias', p95: '29 sem e 2 dias', dtc: 28, weeks: 26, days: 4, weeksMin: 24, daysMin: 1, weeksMax: 29, daysMax: 2 },
      { key: 29, val1: '29 mm', val2: '27 sem e 2 dias', dp: '24 sem e 5 dias', p95: '30 sem e 2 dias', dtc: 29, weeks: 27, days: 2, weeksMin: 24, daysMin: 5, weeksMax: 30, daysMax: 2 },
      { key: 30, val1: '30 mm', val2: '28 sem e 0 dias', dp: '25 sem e 1 dias', p95: '31 sem e 2 dias', dtc: 30, weeks: 28, days: 0, weeksMin: 25, daysMin: 1, weeksMax: 31, daysMax: 2 },
      { key: 31, val1: '31 mm', val2: '28 sem e 6 dias', dp: '25 sem e 5 dias', p95: '32 sem e 2 dias', dtc: 31, weeks: 28, days: 6, weeksMin: 25, daysMin: 5, weeksMax: 32, daysMax: 2 },
      { key: 32, val1: '32 mm', val2: '29 sem e 4 dias', dp: '26 sem e 1 dias', p95: '33 sem e 3 dias', dtc: 32, weeks: 29, days: 4, weeksMin: 26, daysMin: 1, weeksMax: 33, daysMax: 3 },
      { key: 33, val1: '33 mm', val2: '30 sem e 2 dias', dp: '26 sem e 4 dias', p95: '34 sem e 4 dias', dtc: 33, weeks: 30, days: 2, weeksMin: 26, daysMin: 4, weeksMax: 34, daysMax: 4 },
      { key: 34, val1: '34 mm', val2: '31 sem e 0 dias', dp: '26 sem e 6 dias', p95: '35 sem e 5 dias', dtc: 34, weeks: 31, days: 0, weeksMin: 26, daysMin: 6, weeksMax: 35, daysMax: 5 },
      { key: 35, val1: '35 mm', val2: '31 sem e 5 dias', dp: '27 sem e 2 dias', p95: '36 sem e 6 dias', dtc: 35, weeks: 31, days: 5, weeksMin: 27, daysMin: 2, weeksMax: 36, daysMax: 6 },
      { key: 36, val1: '36 mm', val2: '32 sem e 3 dias', dp: '27 sem e 4 dias', p95: '38 sem e 1 dias', dtc: 36, weeks: 32, days: 3, weeksMin: 27, daysMin: 4, weeksMax: 38, daysMax: 1 }
    ],
    points: ["O Diâmetro Transcerebelar (DTC) é a medida padrão do maior diâmetro transverso do cerebelo fetal.", "A medida do DTC é altamente resistente a pressões extrínsecas e deformidades cranianas (como dolicocefalia ou braquicefalia).", "Nas primeiras 24 semanas de gestação, o diâmetro transcerebelar em milímetros corresponde aproximadamente à Idade Gestacional em semanas (Ex.: 20 mm ~ 20 semanas)."],
    attention: 'DTC abaixo do percentil 5 ou discrepância acentuada com outros parâmetros biométricos cefálicos exige análise aprofundada da fossa posterior fetal (como megacisterna magna ou hipoplasia cerebelar).',
    techniqueTitle: 'Corte Axial Transcerebelar',
    techniqueDesc: 'Obtenha um plano transversal inclinado da cabeça fetal. O corte deve passar pela fossa posterior, contendo o cerebelo de forma simétrica com o formato clássico de \'borboleta\', o verme cerebelar e a cisterna magna. Posicione os calipers nas extremidades laerais máximas de cada hemisfério cerebelar.',
    scanningDetails: [{"title": "Fossa posterior", "desc": "Inclinar o transdutor ligeiramente para trás a partir do plano trans-talâmico para focar a fossa posterior."}, {"title": "Bordas externas", "desc": "Medir de borda externa a borda externa (outer-to-outer) no maior eixo transverso."}, {"title": "Simetria", "desc": "O formato de 'borboleta' deve estar simétrico e bem definido na tela."}]
  },
  db: {
    title: 'Distância Binocular (DB)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'CABEÇA E PESCOÇO',
    imageKey: 'medultra_db.png',
    tableDesc: 'Curva de crescimento binocular relacionando a distância binocular (DB) medido em milímetros à idade gestacional estimada (Percentis 5, 50 e 95).',
    tableHeaders: ['DB (mm)', 'IG P50', 'IG P5 (Mín)', 'IG P95 (Máx)'],
    tableData: [
      { key: 15, val1: '15 mm', val2: '10 sem e 3 dias', dp: '7 sem e 1 dias', p95: '13 sem e 6 dias', db: 15, weeks: 10, days: 3, weeksMin: 7, daysMin: 1, weeksMax: 13, daysMax: 6 },
      { key: 16, val1: '16 mm', val2: '11 sem e 0 dias', dp: '7 sem e 5 dias', p95: '14 sem e 3 dias', db: 16, weeks: 11, days: 0, weeksMin: 7, daysMin: 5, weeksMax: 14, daysMax: 3 },
      { key: 17, val1: '17 mm', val2: '11 sem e 4 dias', dp: '8 sem e 2 dias', p95: '15 sem e 0 dias', db: 17, weeks: 11, days: 4, weeksMin: 8, daysMin: 2, weeksMax: 15, daysMax: 0 },
      { key: 18, val1: '18 mm', val2: '12 sem e 1 dias', dp: '8 sem e 6 dias', p95: '15 sem e 4 dias', db: 18, weeks: 12, days: 1, weeksMin: 8, daysMin: 6, weeksMax: 15, daysMax: 4 },
      { key: 19, val1: '19 mm', val2: '12 sem e 6 dias', dp: '9 sem e 4 dias', p95: '16 sem e 1 dias', db: 19, weeks: 12, days: 6, weeksMin: 9, daysMin: 4, weeksMax: 16, daysMax: 1 },
      { key: 20, val1: '20 mm', val2: '13 sem e 3 dias', dp: '10 sem e 1 dias', p95: '16 sem e 5 dias', db: 20, weeks: 13, days: 3, weeksMin: 10, daysMin: 1, weeksMax: 16, daysMax: 5 },
      { key: 21, val1: '21 mm', val2: '14 sem e 0 dias', dp: '10 sem e 5 dias', p95: '17 sem e 2 dias', db: 21, weeks: 14, days: 0, weeksMin: 10, daysMin: 5, weeksMax: 17, daysMax: 2 },
      { key: 22, val1: '22 mm', val2: '14 sem e 4 dias', dp: '11 sem e 2 dias', p95: '17 sem e 6 dias', db: 22, weeks: 14, days: 4, weeksMin: 11, daysMin: 2, weeksMax: 17, daysMax: 6 },
      { key: 23, val1: '23 mm', val2: '15 sem e 1 dias', dp: '11 sem e 6 dias', p95: '18 sem e 4 dias', db: 23, weeks: 15, days: 1, weeksMin: 11, daysMin: 6, weeksMax: 18, daysMax: 4 },
      { key: 24, val1: '24 mm', val2: '15 sem e 6 dias', dp: '12 sem e 4 dias', p95: '19 sem e 1 dias', db: 24, weeks: 15, days: 6, weeksMin: 12, daysMin: 4, weeksMax: 19, daysMax: 1 },
      { key: 25, val1: '25 mm', val2: '16 sem e 3 dias', dp: '13 sem e 1 dias', p95: '19 sem e 5 dias', db: 25, weeks: 16, days: 3, weeksMin: 13, daysMin: 1, weeksMax: 19, daysMax: 5 },
      { key: 26, val1: '26 mm', val2: '17 sem e 0 dias', dp: '13 sem e 5 dias', p95: '20 sem e 2 dias', db: 26, weeks: 17, days: 0, weeksMin: 13, daysMin: 5, weeksMax: 20, daysMax: 2 },
      { key: 27, val1: '27 mm', val2: '17 sem e 4 dias', dp: '14 sem e 2 dias', p95: '20 sem e 6 dias', db: 27, weeks: 17, days: 4, weeksMin: 14, daysMin: 2, weeksMax: 20, daysMax: 6 },
      { key: 28, val1: '28 mm', val2: '18 sem e 1 dias', dp: '14 sem e 6 dias', p95: '21 sem e 4 dias', db: 28, weeks: 18, days: 1, weeksMin: 14, daysMin: 6, weeksMax: 21, daysMax: 4 },
      { key: 29, val1: '29 mm', val2: '18 sem e 6 dias', dp: '15 sem e 4 dias', p95: '22 sem e 1 dias', db: 29, weeks: 18, days: 6, weeksMin: 15, daysMin: 4, weeksMax: 22, daysMax: 1 },
      { key: 30, val1: '30 mm', val2: '19 sem e 3 dias', dp: '16 sem e 1 dias', p95: '22 sem e 5 dias', db: 30, weeks: 19, days: 3, weeksMin: 16, daysMin: 1, weeksMax: 22, daysMax: 5 },
      { key: 31, val1: '31 mm', val2: '20 sem e 0 dias', dp: '16 sem e 1 dias', p95: '22 sem e 5 dias', db: 31, weeks: 20, days: 0, weeksMin: 16, daysMin: 1, weeksMax: 22, daysMax: 5 },
      { key: 32, val1: '32 mm', val2: '20 sem e 4 dias', dp: '17 sem e 1 dias', p95: '23 sem e 6 dias', db: 32, weeks: 20, days: 4, weeksMin: 17, daysMin: 1, weeksMax: 23, daysMax: 6 },
      { key: 33, val1: '33 mm', val2: '21 sem e 1 dias', dp: '17 sem e 6 dias', p95: '24 sem e 4 dias', db: 33, weeks: 21, days: 1, weeksMin: 17, daysMin: 6, weeksMax: 24, daysMax: 4 },
      { key: 34, val1: '34 mm', val2: '21 sem e 5 dias', dp: '18 sem e 3 dias', p95: '25 sem e 1 dias', db: 34, weeks: 21, days: 5, weeksMin: 18, daysMin: 3, weeksMax: 25, daysMax: 1 },
      { key: 35, val1: '35 mm', val2: '22 sem e 2 dias', dp: '19 sem e 0 dias', p95: '25 sem e 5 dias', db: 35, weeks: 22, days: 2, weeksMin: 19, daysMin: 0, weeksMax: 25, daysMax: 5 },
      { key: 36, val1: '36 mm', val2: '22 sem e 6 dias', dp: '19 sem e 4 dias', p95: '26 sem e 2 dias', db: 36, weeks: 22, days: 6, weeksMin: 19, daysMin: 4, weeksMax: 26, daysMax: 2 },
      { key: 37, val1: '37 mm', val2: '23 sem e 4 dias', dp: '20 sem e 1 dias', p95: '26 sem e 6 dias', db: 37, weeks: 23, days: 4, weeksMin: 20, daysMin: 1, weeksMax: 26, daysMax: 6 },
      { key: 38, val1: '38 mm', val2: '24 sem e 1 dias', dp: '20 sem e 6 dias', p95: '27 sem e 3 dias', db: 38, weeks: 24, days: 1, weeksMin: 20, daysMin: 6, weeksMax: 27, daysMax: 3 },
      { key: 39, val1: '39 mm', val2: '24 sem e 5 dias', dp: '21 sem e 3 dias', p95: '28 sem e 0 dias', db: 39, weeks: 24, days: 5, weeksMin: 21, daysMin: 3, weeksMax: 28, daysMax: 0 },
      { key: 40, val1: '40 mm', val2: '25 sem e 2 dias', dp: '22 sem e 0 dias', p95: '28 sem e 4 dias', db: 40, weeks: 25, days: 2, weeksMin: 22, daysMin: 0, weeksMax: 28, daysMax: 4 },
      { key: 41, val1: '41 mm', val2: '25 sem e 6 dias', dp: '22 sem e 4 dias', p95: '29 sem e 1 dias', db: 41, weeks: 25, days: 6, weeksMin: 22, daysMin: 4, weeksMax: 29, daysMax: 1 },
      { key: 42, val1: '42 mm', val2: '26 sem e 4 dias', dp: '23 sem e 1 dias', p95: '29 sem e 6 dias', db: 42, weeks: 26, days: 4, weeksMin: 23, daysMin: 1, weeksMax: 29, daysMax: 6 },
      { key: 43, val1: '43 mm', val2: '27 sem e 1 dias', dp: '23 sem e 6 dias', p95: '30 sem e 3 dias', db: 43, weeks: 27, days: 1, weeksMin: 23, daysMin: 6, weeksMax: 30, daysMax: 3 },
      { key: 44, val1: '44 mm', val2: '27 sem e 5 dias', dp: '24 sem e 3 dias', p95: '31 sem e 0 dias', db: 44, weeks: 27, days: 5, weeksMin: 24, daysMin: 3, weeksMax: 31, daysMax: 0 },
      { key: 45, val1: '45 mm', val2: '28 sem e 2 dias', dp: '25 sem e 0 dias', p95: '31 sem e 4 dias', db: 45, weeks: 28, days: 2, weeksMin: 25, daysMin: 0, weeksMax: 31, daysMax: 4 },
      { key: 46, val1: '46 mm', val2: '28 sem e 6 dias', dp: '25 sem e 4 dias', p95: '32 sem e 1 dias', db: 46, weeks: 28, days: 6, weeksMin: 25, daysMin: 4, weeksMax: 32, daysMax: 1 },
      { key: 47, val1: '47 mm', val2: '29 sem e 4 dias', dp: '26 sem e 1 dias', p95: '32 sem e 6 dias', db: 47, weeks: 29, days: 4, weeksMin: 26, daysMin: 1, weeksMax: 32, daysMax: 6 },
      { key: 48, val1: '48 mm', val2: '30 sem e 1 dias', dp: '26 sem e 6 dias', p95: '33 sem e 3 dias', db: 48, weeks: 30, days: 1, weeksMin: 26, daysMin: 6, weeksMax: 33, daysMax: 3 },
      { key: 49, val1: '49 mm', val2: '30 sem e 5 dias', dp: '27 sem e 2 dias', p95: '34 sem e 0 dias', db: 49, weeks: 30, days: 5, weeksMin: 27, daysMin: 2, weeksMax: 34, daysMax: 0 },
      { key: 50, val1: '50 mm', val2: '31 sem e 2 dias', dp: '27 sem e 6 dias', p95: '34 sem e 4 dias', db: 50, weeks: 31, days: 2, weeksMin: 27, daysMin: 6, weeksMax: 34, daysMax: 4 },
      { key: 51, val1: '51 mm', val2: '31 sem e 6 dias', dp: '28 sem e 4 dias', p95: '35 sem e 1 dias', db: 51, weeks: 31, days: 6, weeksMin: 28, daysMin: 4, weeksMax: 35, daysMax: 1 },
      { key: 52, val1: '52 mm', val2: '32 sem e 4 dias', dp: '29 sem e 1 dias', p95: '35 sem e 6 dias', db: 52, weeks: 32, days: 4, weeksMin: 29, daysMin: 1, weeksMax: 35, daysMax: 6 },
      { key: 53, val1: '53 mm', val2: '33 sem e 0 dias', dp: '29 sem e 5 dias', p95: '36 sem e 3 dias', db: 53, weeks: 33, days: 0, weeksMin: 29, daysMin: 5, weeksMax: 36, daysMax: 3 },
      { key: 54, val1: '54 mm', val2: '33 sem e 4 dias', dp: '30 sem e 2 dias', p95: '37 sem e 0 dias', db: 54, weeks: 33, days: 4, weeksMin: 30, daysMin: 2, weeksMax: 37, daysMax: 0 },
      { key: 55, val1: '55 mm', val2: '34 sem e 1 dias', dp: '30 sem e 6 dias', p95: '37 sem e 4 dias', db: 55, weeks: 34, days: 1, weeksMin: 30, daysMin: 6, weeksMax: 37, daysMax: 4 },
      { key: 56, val1: '56 mm', val2: '34 sem e 6 dias', dp: '31 sem e 4 dias', p95: '38 sem e 1 dias', db: 56, weeks: 34, days: 6, weeksMin: 31, daysMin: 4, weeksMax: 38, daysMax: 1 },
      { key: 57, val1: '57 mm', val2: '35 sem e 3 dias', dp: '32 sem e 1 dias', p95: '38 sem e 5 dias', db: 57, weeks: 35, days: 3, weeksMin: 32, daysMin: 1, weeksMax: 38, daysMax: 5 },
      { key: 58, val1: '58 mm', val2: '36 sem e 0 dias', dp: '32 sem e 5 dias', p95: '39 sem e 2 dias', db: 58, weeks: 36, days: 0, weeksMin: 32, daysMin: 5, weeksMax: 39, daysMax: 2 },
      { key: 59, val1: '59 mm', val2: '36 sem e 4 dias', dp: '33 sem e 1 dias', p95: '39 sem e 6 dias', db: 59, weeks: 36, days: 4, weeksMin: 33, daysMin: 1, weeksMax: 39, daysMax: 6 },
      { key: 60, val1: '60 mm', val2: '37 sem e 1 dias', dp: '33 sem e 6 dias', p95: '40 sem e 4 dias', db: 60, weeks: 37, days: 1, weeksMin: 33, daysMin: 6, weeksMax: 40, daysMax: 4 },
      { key: 61, val1: '61 mm', val2: '37 sem e 6 dias', dp: '34 sem e 4 dias', p95: '41 sem e 1 dias', db: 61, weeks: 37, days: 6, weeksMin: 34, daysMin: 4, weeksMax: 41, daysMax: 1 },
      { key: 62, val1: '62 mm', val2: '38 sem e 3 dias', dp: '35 sem e 1 dias', p95: '41 sem e 5 dias', db: 62, weeks: 38, days: 3, weeksMin: 35, daysMin: 1, weeksMax: 41, daysMax: 5 },
      { key: 63, val1: '63 mm', val2: '39 sem e 0 dias', dp: '35 sem e 5 dias', p95: '42 sem e 2 dias', db: 63, weeks: 39, days: 0, weeksMin: 35, daysMin: 5, weeksMax: 42, daysMax: 2 },
      { key: 64, val1: '64 mm', val2: '39 sem e 4 dias', dp: '36 sem e 2 dias', p95: '426 sem e 0 dias', db: 64, weeks: 39, days: 4, weeksMin: 36, daysMin: 2, weeksMax: 426, daysMax: 0 },
      { key: 65, val1: '65 mm', val2: '40 sem e 1 dias', dp: '36 sem e 6 dias', p95: '43 sem e 4 dias', db: 65, weeks: 40, days: 1, weeksMin: 36, daysMin: 6, weeksMax: 43, daysMax: 4 }
    ],
    points: [
      'A distância binocular (DB) é a medida entre as margens externas dos dois globos orbitários fetais.',
      'É um parâmetro útil para estimar a idade gestacional quando a biometria cefálica convencional está distorcida.',
      'Também serve como rastreamento para anomalias faciais como hipotelorismo (distância curta) ou hipertelorismo (distância longa).'
    ],
    attention: 'Hipotelorismo ou hipertelorismo grave (DB fora dos percentis 5 e 95) está frequentemente associado a síndromes genéticas e requer varredura morfológica cuidadosa.',
    techniqueTitle: 'Corte Axial das Órbitas',
    techniqueDesc: 'Obtenha um plano transversal simétrico da cabeça fetal ligeiramente abaixo do plano trans-talâmico, visualizando ambas as órbitas orbitárias no maior diâmetro. Posicione os calipers nas margens externas de ambas as órbitas (outer-to-outer).',
    scanningDetails: [
      { title: 'Simetria orbital', desc: 'Ambos os olhos devem estar visíveis e com diâmetros simétricos na tela.' },
      { title: 'Caliper outer-to-outer', desc: 'Colocar os calipers estritamente nas margens ósseas externas de cada órbita.' }
    ]
  },
  on: {
    title: 'Osso Nasal (ON)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'OSSOS LONGOS',
    imageKey: 'medultra_on.png',
    tableDesc: 'Percentis de normalidade para o comprimento do Osso Nasal (ON) em milímetros por Idade Gestacional de 11 a 40 semanas.',
    tableHeaders: ['IG (sem)', 'Percentil 50 (mm)', 'Percentil 3 (mm)', 'Percentil 95 (mm)'],
    tableData: [
      { key: 11, val1: '11 sem', val2: '2.3 mm', dp: '1.4 mm', p95: '3.3 mm', weeks: 11, p50Val: 2.3, p3Val: 1.4, p95Val: 3.3 },
      { key: 12, val1: '12 sem', val2: '2.8 mm', dp: '1.8 mm', p95: '4.2 mm', weeks: 12, p50Val: 2.8, p3Val: 1.8, p95Val: 4.2 },
      { key: 13, val1: '13 sem', val2: '3.1 mm', dp: '2.3 mm', p95: '4.6 mm', weeks: 13, p50Val: 3.1, p3Val: 2.3, p95Val: 4.6 },
      { key: 14, val1: '14 sem', val2: '3.8 mm', dp: '2.5 mm', p95: '5.3 mm', weeks: 14, p50Val: 3.8, p3Val: 2.5, p95Val: 5.3 },
      { key: 15, val1: '15 sem', val2: '4.3 mm', dp: '3.0 mm', p95: '5.7 mm', weeks: 15, p50Val: 4.3, p3Val: 3.0, p95Val: 5.7 },
      { key: 16, val1: '16 sem', val2: '4.7 mm', dp: '3.4 mm', p95: '6.2 mm', weeks: 16, p50Val: 4.7, p3Val: 3.4, p95Val: 6.2 },
      { key: 17, val1: '17 sem', val2: '5.3 mm', dp: '4.0 mm', p95: '6.6 mm', weeks: 17, p50Val: 5.3, p3Val: 4.0, p95Val: 6.6 },
      { key: 18, val1: '18 sem', val2: '5.7 mm', dp: '4.3 mm', p95: '7.0 mm', weeks: 18, p50Val: 5.7, p3Val: 4.3, p95Val: 7.0 },
      { key: 19, val1: '19 sem', val2: '6.3 mm', dp: '5.0 mm', p95: '7.9 mm', weeks: 19, p50Val: 6.3, p3Val: 5.0, p95Val: 7.9 },
      { key: 20, val1: '20 sem', val2: '6.7 mm', dp: '5.2 mm', p95: '8.3 mm', weeks: 20, p50Val: 6.7, p3Val: 5.2, p95Val: 8.3 },
      { key: 21, val1: '21 sem', val2: '7.1 mm', dp: '5.6 mm', p95: '9.0 mm', weeks: 21, p50Val: 7.1, p3Val: 5.6, p95Val: 9.0 },
      { key: 22, val1: '22 sem', val2: '7.5 mm', dp: '5.8 mm', p95: '9.3 mm', weeks: 22, p50Val: 7.5, p3Val: 5.8, p95Val: 9.3 },
      { key: 23, val1: '23 sem', val2: '7.9 mm', dp: '6.4 mm', p95: '9.6 mm', weeks: 23, p50Val: 7.9, p3Val: 6.4, p95Val: 9.6 },
      { key: 24, val1: '24 sem', val2: '8.3 mm', dp: '6.8 mm', p95: '10.0 mm', weeks: 24, p50Val: 8.3, p3Val: 6.8, p95Val: 10.0 },
      { key: 25, val1: '25 sem', val2: '8.5 mm', dp: '6.5 mm', p95: '10.7 mm', weeks: 25, p50Val: 8.5, p3Val: 6.5, p95Val: 10.7 },
      { key: 26, val1: '26 sem', val2: '8.9 mm', dp: '7.4 mm', p95: '10.9 mm', weeks: 26, p50Val: 8.9, p3Val: 7.4, p95Val: 10.9 },
      { key: 27, val1: '27 sem', val2: '9.2 mm', dp: '7.5 mm', p95: '11.3 mm', weeks: 27, p50Val: 9.2, p3Val: 7.5, p95Val: 11.3 },
      { key: 28, val1: '28 sem', val2: '9.8 mm', dp: '7.6 mm', p95: '12.1 mm', weeks: 28, p50Val: 9.8, p3Val: 7.6, p95Val: 12.1 },
      { key: 29, val1: '29 sem', val2: '9.8 mm', dp: '7.7 mm', p95: '11.8 mm', weeks: 29, p50Val: 9.8, p3Val: 7.7, p95Val: 11.8 },
      { key: 30, val1: '30 sem', val2: '10.0 mm', dp: '7.9 mm', p95: '12.6 mm', weeks: 30, p50Val: 10.0, p3Val: 7.9, p95Val: 12.6 },
      { key: 31, val1: '31 sem', val2: '10.4 mm', dp: '8.2 mm', p95: '12.6 mm', weeks: 31, p50Val: 10.4, p3Val: 8.2, p95Val: 12.6 },
      { key: 32, val1: '32 sem', val2: '10.5 mm', dp: '8.6 mm', p95: '13.6 mm', weeks: 32, p50Val: 10.5, p3Val: 8.6, p95Val: 13.6 },
      { key: 33, val1: '33 sem', val2: '10.8 mm', dp: '8.7 mm', p95: '1.28 mm', weeks: 33, p50Val: 10.8, p3Val: 8.7, p95Val: 1.28 },
      { key: 34, val1: '34 sem', val2: '10.9 mm', dp: '9.1 mm', p95: '12.8 mm', weeks: 34, p50Val: 10.9, p3Val: 9.1, p95Val: 12.8 },
      { key: 35, val1: '35 sem', val2: '11.0 mm', dp: '8.5 mm', p95: '14.1 mm', weeks: 35, p50Val: 11.0, p3Val: 8.5, p95Val: 14.1 },
      { key: 36, val1: '36 sem', val2: '10.8 mm', dp: '7.8 mm', p95: '12.8 mm', weeks: 36, p50Val: 10.8, p3Val: 7.8, p95Val: 12.8 },
      { key: 37, val1: '37 sem', val2: '11.4 mm', dp: '8.7 mm', p95: '14.5 mm', weeks: 37, p50Val: 11.4, p3Val: 8.7, p95Val: 14.5 },
      { key: 38, val1: '38 sem', val2: '11.7 mm', dp: '9.3 mm', p95: '15.7 mm', weeks: 38, p50Val: 11.7, p3Val: 9.3, p95Val: 15.7 },
      { key: 39, val1: '39 sem', val2: '10.9 mm', dp: '9.2 mm', p95: '14.0 mm', weeks: 39, p50Val: 10.9, p3Val: 9.2, p95Val: 14.0 },
      { key: 40, val1: '40 sem', val2: '12.1 mm', dp: '10.4 mm', p95: '14.5 mm', weeks: 40, p50Val: 12.1, p3Val: 10.4, p95Val: 14.5 }
    ],
    points: [
      'A presença e o comprimento do osso nasal (ON) são marcadores fundamentais no rastreamento de aneuploidias, especialmente a Síndrome de Down (Trissomia 21).',
      'A hipoplasia ou ausência do osso nasal no primeiro trimestre ou início do segundo trimestre está correlacionada a maior risco de anomalias cromossômicas.',
      'A taxa de ausência do osso nasal em fetos com Trissomia 21 no primeiro trimestre é de cerca de 60-70%.'
    ],
    attention: 'Ausência ou hipoplasia grave do osso nasal (comprimento abaixo do percentil 3 para a idade gestacional) é um marcador de alto risco que exige aconselhamento genético e exames diagnósticos invasivos (NIPT/Cariótipo).',
    techniqueTitle: 'Perfil Sagital da Face',
    techniqueDesc: 'Obtenha um corte sagital mediano estrito da face fetal (perfil facial). O ângulo de insonação deve ser de 45 a 90 graus com a linha do osso nasal. Identifique três estruturas ecogênicas distintas na ponta do nariz: pele superior, pele da ponta do nariz e osso nasal subjacente. Meça a diáfise óssea ecogênica de ponta a ponta.',
    scanningDetails: [
      { title: 'Perfil estrito', desc: 'Visualizar o osso nasal, a pele do nariz e o osso maxilar superior em plano sagital mediano.' },
      { title: 'Alinhamento da sonda', desc: 'Mantenha o transdutor a 90 graus com o osso nasal para máxima nitidez das bordas.' },
      { title: 'Identificar as 3 linhas', desc: 'Pele do nariz (linha superior), pele da ponta do nariz e osso nasal (linha inferior mais espessa e ecogênica).' }
    ]
  },
  pn: {
    title: 'Prega Nucal (PN)',
    subTitle: 'Obstetrícia / Fetal',
    badge: 'CABEÇA E PESCOÇO',
    imageKey: 'medultra_pn.png',
    tableDesc: 'Valores normativos de espessura da Prega Nucal (PN) em milímetros por Idade Gestacional entre 16 e 24 semanas.',
    tableHeaders: ['IG (sem)', 'Percentil 50 (mm)', 'Percentil 3 (mm)', 'Percentil 95 (mm)'],
    tableData: [
      { key: 16, val1: '16 sem', val2: '3.1 mm', dp: '2.1 mm', p95: '4.2 mm', weeks: 16, p50Val: 3.1, p3Val: 2.1, p95Val: 4.2 },
      { key: 17, val1: '17 sem', val2: '3.4 mm', dp: '2.2 mm', p95: '4.6 mm', weeks: 17, p50Val: 3.4, p3Val: 2.2, p95Val: 4.6 },
      { key: 18, val1: '18 sem', val2: '3.6 mm', dp: '2.2 mm', p95: '5.0 mm', weeks: 18, p50Val: 3.6, p3Val: 2.2, p95Val: 5.0 },
      { key: 19, val1: '19 sem', val2: '4.1 mm', dp: '2.8 mm', p95: '5.3 mm', weeks: 19, p50Val: 4.1, p3Val: 2.8, p95Val: 5.3 },
      { key: 20, val1: '20 sem', val2: '4.3 mm', dp: '2.9 mm', p95: '5.6 mm', weeks: 20, p50Val: 4.3, p3Val: 2.9, p95Val: 5.6 },
      { key: 21, val1: '21 sem', val2: '4.7 mm', dp: '3.2 mm', p95: '5.8 mm', weeks: 21, p50Val: 4.7, p3Val: 3.2, p95Val: 5.8 },
      { key: 22, val1: '22 sem', val2: '5.0 mm', dp: '3.3 mm', p95: '5.8 mm', weeks: 22, p50Val: 5.0, p3Val: 3.3, p95Val: 5.8 },
      { key: 23, val1: '23 sem', val2: '5.0 mm', dp: '3.5 mm', p95: '5.9 mm', weeks: 23, p50Val: 5.0, p3Val: 3.5, p95Val: 5.9 },
      { key: 24, val1: '24 sem', val2: '5.2 mm', dp: '3.7 mm', p95: '5.9 mm', weeks: 24, p50Val: 5.2, p3Val: 3.7, p95Val: 5.9 }
    ],
    points: [
      'A prega nucal (PN) é a medida da espessura dos tecidos moles na região occipital do crânio fetal, avaliada no segundo trimestre (16 a 24 semanas).',
      'É considerada um dos marcadores secundários (soft markers) mais sensíveis para a Síndrome de Down no segundo trimestre.',
      'O valor de corte clássico de normalidade é de até 5.0 mm ou 6.0 mm. Valores acima deste limite caracterizam prega nucal espessada.'
    ],
    attention: 'Prega nucal espessada (PN >= 6.0 mm ou acima do Percentil 95 entre 16 e 24 semanas) está fortemente associada a trissomias cromossômicas e cardiopatias congênitas, necessitando de ecocardiografia fetal e aconselhamento.',
    techniqueTitle: 'Corte Axial Transcerebelar',
    techniqueDesc: 'Obtenha o mesmo plano axial utilizado para medir o Diâmetro Transcerebelar (DTC), visualizando o cerebelo, os hemisférios, o vermis, a cisterna magna e o osso occipital. Posicione os calipers na margem externa do osso occipital e na margem externa da pele.',
    scanningDetails: [
      { title: 'Plano transcerebelar', desc: 'Focar a fossa posterior contendo o cerebelo e a cisterna magna.' },
      { title: 'Calipers externos', desc: 'Medir estritamente da borda externa do osso occipital até a borda externa da pele.' },
      { title: 'Evitar angulações', desc: 'Garantir corte simétrico para evitar falsas estimativas de espessamento.' }
    ]
  }

};
