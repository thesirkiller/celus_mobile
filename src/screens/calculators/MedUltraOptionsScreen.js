import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';
import { medultraData } from '../../services/medultraData';
import CustomHeader from '../../components/CustomHeader';
import SlidingTabs from '../../components/SlidingTabs';
import ReferenceTable from '../../components/ReferenceTable';

const { width } = Dimensions.get('window');

// Mapeamento estático de assets para React Native
const images = {
  'medultra_sg.png': require('../../../assets/medultra_sg.png'),
  'medultra_vv.png': require('../../../assets/medultra_vv.png'),
  'medultra_ccn.png': require('../../../assets/medultra_ccn.png'),
  'medultra_fce.png': require('../../../assets/medultra_fce.png'),
  'medultra_tn.png': require('../../../assets/medultra_tn.png'),
  'medultra_dbp_cc.png': require('../../../assets/medultra_dbp_cc.png'),
  'medultra_ca.png': require('../../../assets/medultra_ca.png'),
  'medultra_cf.png': require('../../../assets/medultra_cf.png'),
  'medultra_ila.png': require('../../../assets/medultra_ila.png'),
  'medultra_peso_fetal.png': require('../../../assets/medultra_peso_fetal.png'),
  'medultra_acm.png': require('../../../assets/medultra_acm.png'),
  'medultra_au.png': require('../../../assets/medultra_au.png'),
  'medultra_umero.png': require('../../../assets/medultra_umero.png'),
  'medultra_radio.png': require('../../../assets/medultra_radio.png'),
  'medultra_ulna.png': require('../../../assets/medultra_ulna.png'),
  'medultra_tibia.png': require('../../../assets/medultra_tibia.png'),
  'medultra_fibula.png': require('../../../assets/medultra_fibula.png'),
  'medultra_vl.png': require('../../../assets/medultra_vl.png'),
  'medultra_dtc.png': require('../../../assets/medultra_dtc.png'),
  'medultra_db.png': require('../../../assets/medultra_db.png'),
  'medultra_on.png': require('../../../assets/medultra_on.png'),
  'medultra_pn.png': require('../../../assets/medultra_pn.png'),
};

export default function MedUltraOptionsScreen({ navigation, route }) {
  const { topicId = 'sg' } = route.params || {};
  const data = medultraData[topicId] || medultraData.sg;

  const [selectedMenu, setSelectedMenu] = useState('Tabela'); // Tabela, Calculadora, Exame, Tecnica

  // Inputs por Calculadora
  // SG (Saco Gestacional)
  const [d1, setD1] = useState('');
  const [d2, setD2] = useState('');
  const [d3, setD3] = useState('');

  // VV (Vesícula Vitelínica)
  const [calcWeeks, setCalcWeeks] = useState('');
  const [calcDays, setCalcDays] = useState('');
  const [measuredVv, setMeasuredVv] = useState('');

  // CCN (Comprimento Cabeça-Nádega)
  const [ccnVal, setCcnVal] = useState('');

  // FCE (Frequência Cardíaca)
  const [ccnFce, setCcnFce] = useState('');
  const [fceBpm, setFceBpm] = useState('');

  // TN (Translucência Nucal)
  const [ccnTn, setCcnTn] = useState('');
  const [tnMm, setTnMm] = useState('');

  // DBP (Diâmetro Biparietal)
  const [dbpVal, setDbpVal] = useState('');

  // CA (Circunferência Abdominal)
  const [caVal, setCaVal] = useState('');

  // CF (Comprimento do Fêmur)
  const [cfVal, setCfVal] = useState('');

  // Novos Estados
  // ILA
  const [ilaVal, setIlaVal] = useState('');
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');

  // Geral (Doppler, Ossos, VL)
  const [weeksInput, setWeeksInput] = useState('');
  const [daysInput, setDaysInput] = useState('');
  const [ipInput, setIpInput] = useState('');
  const [irInput, setIrInput] = useState('');
  const [ratioInput, setRatioInput] = useState('');
  const [lenInput, setLenInput] = useState('');
  const [dtcInput, setDtcInput] = useState('');
  const [dbInput, setDbInput] = useState('');

  // Resultado Geral da Calculadora
  const [calcResult, setCalcResult] = useState(null);

  // Sempre que mudar de tópico, limpa a calculadora
  useEffect(() => {
    handleClearCalculator();
  }, [topicId]);

  // Função para calcular DMSG e IG (Saco Gestacional) com a fórmula corrigida do PDF (IG = DMSG + 25 dias)
  const handleCalculateSg = () => {
    const v1 = parseFloat(d1);
    const v2 = parseFloat(d2);
    const v3 = parseFloat(d3);

    if (isNaN(v1) || v1 <= 0 || isNaN(v2) || v2 <= 0 || isNaN(v3) || v3 <= 0) {
      Alert.alert('Valores Inválidos', 'Por favor, insira valores maiores que zero nos três diâmetros.');
      return;
    }

    const dmsg = (v1 + v2 + v3) / 3;
    const totalDays = Math.round(dmsg + 25);
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;

    setCalcResult({
      dmsg: dmsg.toFixed(2),
      weeks,
      days,
      totalDays,
      dmsgRaw: dmsg
    });
  };

  // Função para calcular normalidade da Vesícula Vitelínica (VV)
  const handleCalculateVv = () => {
    const w = parseInt(calcWeeks, 10);
    const d = parseInt(calcDays, 10) || 0;

    if (isNaN(w) || w < 4 || w > 9) {
      Alert.alert('Idade Gestacional Inválida', 'A idade gestacional para esta tabela de referência deve estar entre 4 e 9 semanas.');
      return;
    }
    if (d < 0 || d > 6) {
      Alert.alert('Dias Inválidos', 'Por favor, insira um valor de dias entre 0 e 6.');
      return;
    }

    const igKey = `${w}+${d}`;
    const row = data.tableData.find((item) => item.key === igKey);

    if (!row) {
      Alert.alert('Sem Dados', 'Dados antropométricos fora do alcance das tabelas de normalidade.');
      return;
    }

    const mean = parseFloat(row.val2);
    const upperLimit = parseFloat(row.dp);
    const measuredVal = parseFloat(measuredVv);

    let status = 'Normal';
    if (!isNaN(measuredVal)) {
      if (measuredVal > 6.0) {
        status = 'Crítico (VV > 6mm - Risco de perda gestacional)';
      } else if (measuredVal > upperLimit) {
        status = `Alterado (Acima do limite superior de ${upperLimit}mm)`;
      } else if (measuredVal < mean - 1.0) {
        status = 'Abaixo da média esperada';
      }
    }

    setCalcResult({
      ig: igKey,
      mean,
      upperLimit,
      measuredVal: isNaN(measuredVal) ? null : measuredVal,
      status
    });
  };

  // Função para calcular datação por CCN
  const handleCalculateCcn = () => {
    const ccn = parseInt(ccnVal, 10);
    if (isNaN(ccn) || ccn < 2 || ccn > 84) {
      Alert.alert('CCN Inválido', 'O Comprimento Cabeça-Nádega (CCN) deve estar entre 2 e 84 mm.');
      return;
    }

    const row = data.tableData.find((item) => item.key === ccn);
    if (!row) {
      Alert.alert('Sem Dados', 'Dados fora do alcance das tabelas.');
      return;
    }

    setCalcResult({
      ccn,
      weeks: row.weeks,
      days: row.days,
      dpVal: row.dpVal
    });
  };

  // Função para calcular Frequência Cardíaca Embrionária (FCE)
  const handleCalculateFce = () => {
    const ccn = parseInt(ccnFce, 10);
    if (isNaN(ccn) || ccn < 1 || ccn > 40) {
      Alert.alert('CCN Inválido', 'O Comprimento Cabeça-Nádega (CCN) deve estar entre 1 e 40 mm.');
      return;
    }

    const row = data.tableData.find((item) => item.key === ccn);
    if (!row) {
      Alert.alert('Sem Dados', 'Dados fora do alcance das tabelas de normalidade.');
      return;
    }

    const mean = row.p50;
    const p5 = row.p5;
    const p95 = row.p95;
    const measuredVal = parseInt(fceBpm, 10);

    let status = 'Normal';
    if (!isNaN(measuredVal)) {
      if (measuredVal < p5) {
        status = `Bradicardia (Abaixo do percentil 5: ${p5} bpm)`;
      } else if (measuredVal > p95) {
        status = `Taquicardia (Acima do percentil 95: ${p95} bpm)`;
      }
    }

    setCalcResult({
      ccn,
      mean,
      p5,
      p95,
      measuredVal: isNaN(measuredVal) ? null : measuredVal,
      status
    });
  };

  // Função para calcular Translucência Nucal (TN)
  const handleCalculateTn = () => {
    const ccn = parseInt(ccnTn, 10);
    if (isNaN(ccn) || ccn < 45 || ccn > 84) {
      Alert.alert('CCN Inválido', 'O Comprimento Cabeça-Nádega (CCN) deve estar entre 45 e 84 mm para avaliação de TN.');
      return;
    }

    const row = data.tableData.find((item) => item.key === ccn);
    if (!row) {
      Alert.alert('Sem Dados', 'Dados fora do alcance das tabelas de normalidade.');
      return;
    }

    const mean = row.p50;
    const p5 = row.p5;
    const p95 = row.p95;
    const measuredVal = parseFloat(tnMm);

    let status = 'Normal';
    if (!isNaN(measuredVal)) {
      if (measuredVal >= 2.5) {
        status = 'Aumentada (TN >= 2.5mm - Alerta Clínico Crítico)';
      } else if (measuredVal > p95) {
        status = `Alterada (Acima do percentil 95: ${p95} mm)`;
      } else if (measuredVal < p5) {
        status = 'Abaixo do percentil 5';
      }
    }

    setCalcResult({
      ccn,
      mean,
      p5,
      p95,
      measuredVal: isNaN(measuredVal) ? null : measuredVal,
      status
    });
  };

  // Função para calcular datação por DBP
  const handleCalculateDbp = () => {
    const dbp = parseInt(dbpVal, 10);
    if (isNaN(dbp) || dbp < 14 || dbp > 102) {
      Alert.alert('DBP Inválido', 'O Diâmetro Biparietal (DBP) deve estar entre 14 e 102 mm.');
      return;
    }

    const row = data.tableData.find((item) => item.key === dbp);
    if (!row) {
      Alert.alert('Sem Dados', 'Dados fora do alcance das tabelas.');
      return;
    }

    setCalcResult({
      dbp,
      weeks: row.weeks,
      days: row.days,
      dpVal: row.dpVal
    });
  };

  // Função para calcular datação por CA
  const handleCalculateCa = () => {
    const caInput = parseInt(caVal, 10);
    if (isNaN(caInput) || caInput < 50 || caInput > 380) {
      Alert.alert('CA Inválida', 'A Circunferência Abdominal (CA) deve estar entre 50 e 380 mm.');
      return;
    }

    // A tabela de CA está de 5 em 5mm. Acha a mais próxima.
    const caClosest = Math.round(caInput / 5) * 5;
    const row = data.tableData.find((item) => item.key === caClosest);

    if (!row) {
      Alert.alert('Sem Dados', 'Dados fora do alcance das tabelas.');
      return;
    }

    setCalcResult({
      ca: caInput,
      caMatched: caClosest,
      weeks: row.weeks,
      days: row.days,
      dpVal: row.dpVal
    });
  };

  // Função para calcular datação por CF
  const handleCalculateCf = () => {
    const cf = parseInt(cfVal, 10);
    if (isNaN(cf) || cf < 6 || cf > 82) {
      Alert.alert('CF Inválido', 'O Comprimento do Fêmur (CF) deve estar entre 6 e 82 mm.');
      return;
    }

    const row = data.tableData.find((item) => item.key === cf);
    if (!row) {
      Alert.alert('Sem Dados', 'Dados fora do alcance das tabelas.');
      return;
    }

    setCalcResult({
      cf,
      weeks: row.weeks,
      days: row.days,
      dpVal: row.dpVal
    });
  };

    // Funções de Cálculo do Lote Novo
  // ILA
  const handleCalculateIla = () => {
    const valQ1 = parseFloat(q1) || 0;
    const valQ2 = parseFloat(q2) || 0;
    const valQ3 = parseFloat(q3) || 0;
    const valQ4 = parseFloat(q4) || 0;

    let totalIla = parseFloat(ilaVal);
    if (q1 || q2 || q3 || q4) {
      totalIla = valQ1 + valQ2 + valQ3 + valQ4;
    }

    if (isNaN(totalIla) || totalIla < 0) {
      Alert.alert('Valor Inválido', 'Por favor, insira uma medida válida de ILA ou os valores dos quadrantes.');
      return;
    }

    let status = 'Normal';
    if (totalIla <= 50) {
      status = 'Oligoidrâmnio (Crítico - ILA ≤ 50mm)';
    } else if (totalIla >= 250) {
      status = 'Polihidrâmnio (Crítico - ILA ≥ 250mm)';
    } else if (totalIla < 80) {
      status = 'Líquido Reduzido (ILA entre 50 e 80mm)';
    } else if (totalIla >= 80 && totalIla <= 240) {
      status = 'Líquido Normal (ILA adequado)';
    } else {
      status = 'Líquido no Limite Superior (ILA entre 240 e 250mm)';
    }

    // Compare with percentiles if weeks entered
    const w = parseInt(weeksInput, 10);
    let matchedPercentiles = null;
    if (!isNaN(w) && w >= 16 && w <= 42) {
      const row = data.tableData.find(item => item.key === w);
      if (row) {
        matchedPercentiles = {
          p5: parseInt(row.val2),
          p50: parseInt(row.dp),
          p95: parseInt(row.p95)
        };
      }
    }

    setCalcResult({
      totalIla,
      valQ1, valQ2, valQ3, valQ4,
      status,
      percentiles: matchedPercentiles,
      weeks: isNaN(w) ? null : w
    });
  };

  // Peso Fetal (Hadlock 3 Parâmetros)
  const handleCalculatePesoFetal = () => {
    const dbp = parseFloat(dbpVal) || 0;
    const ca = parseFloat(caVal) || 0;
    const cf = parseFloat(cfVal) || 0;

    if (dbp <= 0 || ca <= 0 || cf <= 0) {
      Alert.alert('Medidas Obrigatórias', 'Insira medidas maiores que zero para DBP, CA e CF (hadlock 3 parâmetros).');
      return;
    }

    // Hadlock formula requires cm
    const dbpCm = dbp / 10;
    const caCm = ca / 10;
    const cfCm = cf / 10;

    // Log10 EFW = 1.335 + 0.0316*DBP + 0.0457*AC + 0.1623*FL - 0.0034*AC*FL
    const log10Efw = 1.335 + (0.0316 * dbpCm) + (0.0457 * caCm) + (0.1623 * cfCm) - (0.0034 * caCm * cfCm);
    const efw = Math.pow(10, log10Efw);

    const w = parseInt(weeksInput, 10);
    let matchedPercentiles = null;
    let classification = 'Adequado (AIG)';
    if (!isNaN(w) && w >= 20 && w <= 40) {
      const row = data.tableData.find(item => item.key === w);
      if (row) {
        const p10 = parseInt(row.val2);
        const p50 = parseInt(row.dp);
        const p90 = parseInt(row.p90);
        matchedPercentiles = { p10, p50, p90 };
        
        if (efw < p10) {
          classification = 'Pequeno para a Idade Gestacional (PIG - < Percentil 10)';
        } else if (efw > p90) {
          classification = 'Grande para a Idade Gestacional (GIG - > Percentil 90)';
        } else {
          classification = 'Adequado para a Idade Gestacional (AIG)';
        }
      }
    }

    setCalcResult({
      efw: efw.toFixed(0),
      dbp, ca, cf,
      percentiles: matchedPercentiles,
      classification,
      weeks: isNaN(w) ? null : w
    });
  };

  // Doppler ACM e AU
  const handleCalculateDoppler = () => {
    const w = parseInt(weeksInput, 10);
    if (isNaN(w)) {
      Alert.alert('Idade Gestacional', 'Por favor, insira a idade gestacional em semanas.');
      return;
    }

    const row = data.tableData.find(item => item.key === w);
    if (!row) {
      Alert.alert('Tabela Fora de Faixa', 'Dados de referência indisponíveis para esta idade gestacional.');
      return;
    }

    const ip = parseFloat(ipInput);
    const ir = parseFloat(irInput);
    const ratio = parseFloat(ratioInput);

    let statusIp = 'Normal';
    let statusIr = 'Normal';
    let statusRatio = 'Normal';

    if (topicId === 'acm') {
      const p50Ip = parseFloat(row.val2);
      const p5Ip = parseFloat(row.dp);
      const p95Ip = parseFloat(row.p95);
      const p50Ratio = parseFloat(row.other50);
      const p5Ratio = parseFloat(row.other5);
      const p95Ratio = parseFloat(row.other95);

      if (!isNaN(ip)) {
        if (ip < p5Ip) {
          statusIp = 'Centralização Fetal (Abaixo do Percentil 5 - Vasodilatação)';
        } else if (ip > p95Ip) {
          statusIp = 'Resistência Aumentada (Acima do Percentil 95)';
        }
      }
      if (!isNaN(ratio)) {
        if (ratio < p5Ratio) {
          statusRatio = 'Razão AU/ACM Baixa';
        } else if (ratio > p95Ratio) {
          statusRatio = 'Razão AU/ACM Elevada (Sugere Centralização)';
        }
      }

      setCalcResult({
        weeks: w,
        ip, ratio,
        percentilesIp: { p5: p5Ip, p50: p50Ip, p95: p95Ip },
        percentilesRatio: { p5: p5Ratio, p50: p50Ratio, p95: p95Ratio },
        statusIp, statusRatio
      });
    } else {
      // AU
      const p50Ir = parseFloat(row.val2);
      const p5Ir = parseFloat(row.dp);
      const p95Ir = parseFloat(row.p95);
      const p50Ip = parseFloat(row.other50);
      const p5Ip = parseFloat(row.other5);
      const p95Ip = parseFloat(row.other95);

      if (!isNaN(ir)) {
        if (ir > p95Ir) {
          statusIr = 'Resistência Aumentada (Acima do Percentil 95 - Alerta)';
        } else if (ir < p5Ir) {
          statusIr = 'Resistência Baixa (Adequada)';
        }
      }
      if (!isNaN(ip)) {
        if (ip > p95Ip) {
          statusIp = 'Pulsatilidade Elevada (Acima do Percentil 95)';
        } else if (ip < p5Ip) {
          statusIp = 'Pulsatilidade Baixa';
        }
      }

      setCalcResult({
        weeks: w,
        ip, ir,
        percentilesIr: { p5: p5Ir, p50: p50Ir, p95: p95Ir },
        percentilesIp: { p5: p5Ip, p50: p50Ip, p95: p95Ip },
        statusIr, statusIp
      });
    }
  };

  // Ossos Longos (Úmero, Rádio, Ulna, Tíbia, Fíbula) e VL
  const handleCalculateBones = () => {
    const w = parseInt(weeksInput, 10);
    if (isNaN(w)) {
      Alert.alert('Idade Gestacional', 'Por favor, insira a idade gestacional em semanas.');
      return;
    }

    const row = data.tableData.find(item => item.key === w);
    if (!row) {
      Alert.alert('Tabela Fora de Faixa', 'Dados de referência indisponíveis para esta idade gestacional.');
      return;
    }

    const measuredLength = parseFloat(lenInput);
    if (isNaN(measuredLength) || measuredLength <= 0) {
      Alert.alert('Medida Inválida', 'Por favor, insira uma medida em milímetros maior que zero.');
      return;
    }

    const p50 = row.p50Val;
    const p3 = row.p3Val;
    const p97 = row.p97Val;

    let status = 'Adequado (Percentil Normal)';
    if (topicId === 'vl') {
      if (measuredLength >= 15) {
        status = 'Ventriculomegalia Grave (Crítico - VL ≥ 15mm)';
      } else if (measuredLength >= 10) {
        status = 'Ventriculomegalia Leve/Moderada (Alerta - VL entre 10 e 15mm)';
      } else if (measuredLength < p3) {
        status = 'Átrio Estreito';
      }
    } else {
      if (measuredLength < p3) {
        status = 'Encurtamento Grave (Abaixo do Percentil 3 - Alerta de Displasia)';
      } else if (measuredLength > p97) {
        status = 'Percentil Elevado (Acima do Percentil 97)';
      }
    }

    setCalcResult({
      weeks: w,
      measuredLength,
      percentiles: { p3, p50, p97 },
      status
    });
  };

  // DTC (Diâmetro Transcerebelar)
  const handleCalculateDtc = () => {
    const measuredDtc = Math.round(parseFloat(dtcInput));
    if (isNaN(measuredDtc) || measuredDtc < 13 || measuredDtc > 36) {
      Alert.alert('DTC Fora do Limite', 'A medida do Diâmetro Transcerebelar (DTC) deve estar entre 13 e 36 mm.');
      return;
    }

    const row = data.tableData.find(item => item.key === measuredDtc);
    if (!row) {
      Alert.alert('Sem Dados', 'Dados fora do alcance das tabelas de normalidade.');
      return;
    }

    setCalcResult({
      dtc: measuredDtc,
      weeks: row.weeks,
      days: row.days,
      weeksMin: row.weeksMin,
      daysMin: row.daysMin,
      weeksMax: row.weeksMax,
      daysMax: row.daysMax
    });
  };

  // DB (Distância Binocular)
  const handleCalculateDb = () => {
    const measuredDb = Math.round(parseFloat(dbInput));
    if (isNaN(measuredDb) || measuredDb < 15 || measuredDb > 65) {
      Alert.alert('DB Fora do Limite', 'A medida da Distância Binocular (DB) deve estar entre 15 e 65 mm.');
      return;
    }

    const row = data.tableData.find(item => item.key === measuredDb);
    if (!row) {
      Alert.alert('Sem Dados', 'Dados fora do alcance das tabelas de normalidade.');
      return;
    }

    setCalcResult({
      db: measuredDb,
      weeks: row.weeks,
      days: row.days,
      weeksMin: row.weeksMin,
      daysMin: row.daysMin,
      weeksMax: row.weeksMax,
      daysMax: row.daysMax
    });
  };

  // ON (Osso Nasal)
  const handleCalculateOn = () => {
    const w = parseInt(weeksInput, 10);
    if (isNaN(w)) {
      Alert.alert('Idade Gestacional', 'Por favor, insira a idade gestacional em semanas.');
      return;
    }

    const row = data.tableData.find(item => item.key === w);
    if (!row) {
      Alert.alert('Tabela Fora de Faixa', 'Dados de referência indisponíveis para esta idade gestacional.');
      return;
    }

    const measuredLength = parseFloat(lenInput);
    if (isNaN(measuredLength) || measuredLength <= 0) {
      Alert.alert('Medida Inválida', 'Por favor, insira uma medida em milímetros maior que zero.');
      return;
    }

    const p50 = row.p50Val;
    const p3 = row.p3Val;
    const p95 = row.p95Val;

    let status = 'Adequado (Percentil Normal)';
    if (measuredLength < p3) {
      status = 'Hipoplasia de Osso Nasal (Abaixo do Percentil 3 - Risco Aumentado para Aneuploidias)';
    } else if (measuredLength > p95) {
      status = 'Comprimento Elevado (Acima do Percentil 95)';
    }

    setCalcResult({
      weeks: w,
      measuredLength,
      percentiles: { p3, p50, p95 },
      status
    });
  };

  // PN (Prega Nucal)
  const handleCalculatePn = () => {
    const w = parseInt(weeksInput, 10);
    if (isNaN(w)) {
      Alert.alert('Idade Gestacional', 'Por favor, insira a idade gestacional em semanas.');
      return;
    }

    const row = data.tableData.find(item => item.key === w);
    if (!row) {
      Alert.alert('Tabela Fora de Faixa', 'Dados de referência indisponíveis para esta idade gestacional (PN é avaliada entre 16 e 24 semanas).');
      return;
    }

    const measuredLength = parseFloat(lenInput);
    if (isNaN(measuredLength) || measuredLength <= 0) {
      Alert.alert('Medida Inválida', 'Por favor, insira uma medida em milímetros maior que zero.');
      return;
    }

    const p50 = row.p50Val;
    const p3 = row.p3Val;
    const p95 = row.p95Val;

    let status = 'Adequada (Espessura Normal)';
    if (measuredLength >= 6.0) {
      status = 'Prega Nucal Espessada (Crítico - PN ≥ 6.0 mm - Marcador de Alto Risco para Síndrome de Down)';
    } else if (measuredLength > p95) {
      status = 'Prega Nucal Espessada (Alerta - Acima do Percentil 95)';
    } else if (measuredLength < p3) {
      status = 'Abaixo do Percentil 3';
    }

    setCalcResult({
      weeks: w,
      measuredLength,
      percentiles: { p3, p50, p95 },
      status
    });
  };

  const handleClearCalculator = () => {
    setD1(''); setD2(''); setD3('');
    setCalcWeeks(''); setCalcDays(''); setMeasuredVv('');
    setCcnVal('');
    setCcnFce(''); setFceBpm('');
    setCcnTn(''); setTnMm('');
    setDbpVal('');
    setCaVal('');
    setCfVal('');
    setIlaVal(''); setQ1(''); setQ2(''); setQ3(''); setQ4('');
    setWeeksInput(''); setDaysInput('');
    setIpInput(''); setIrInput(''); setRatioInput('');
    setLenInput(''); setDtcInput(''); setDbInput('');
    setCalcResult(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Premium Modularizado */}
      <CustomHeader title={data.title} navigation={navigation} />

      {/* Sub-Header Metadados */}
      <View style={styles.subHeader}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{data.badge}</Text>
        </View>
        <Text style={styles.subTitle}>{data.subTitle}</Text>
      </View>

      {/* Abas Deslizantes Premium Modularizadas */}
      <SlidingTabs 
        tabs={['Tabela', 'Calculadora', 'Exame', 'Tecnica']}
        activeTab={selectedMenu}
        onChangeTab={setSelectedMenu}
      />

      {/* Tab Contents */}
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        
        {/* ABA 1: TABELA DE REFERÊNCIA MODULARIZADA */}
        {selectedMenu === 'Tabela' && (
          <View style={styles.tabContent}>
            <Text style={styles.sectionDesc}>
              {data.tableDesc}
            </Text>
            
            <ReferenceTable 
              headers={data.tableHeaders}
              data={data.tableData}
              flexRatios={topicId === 'fce' || topicId === 'tn' ? [1, 1.5, 1.5] : [1.2, 2, 1]}
              showUnitsSuffix={topicId === 'sg' || topicId === 'ccn' || topicId === 'fce' || topicId === 'tn' ? 'mm' : ''}
            />
          </View>
        )}

        {/* ABA 2: CALCULADORA INTERATIVA */}
        {selectedMenu === 'Calculadora' && (
          <View style={styles.tabContent}>
            
            {/* CALCULADORA SACO GESTACIONAL (SG) */}
            {topicId === 'sg' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira os três diâmetros ortogonais do saco gestacional para obter o Diâmetro Médio (DMSG) e a datação gestacional 1:1 com o padrão FEBRASGO.
                </Text>

                <View style={styles.inputRow}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Diâmetro D1 (mm)</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Long."
                      value={d1}
                      onChangeText={setD1}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Diâmetro D2 (mm)</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ant-post."
                      value={d2}
                      onChangeText={setD2}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Diâmetro D3 (mm)</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Transv."
                      value={d3}
                      onChangeText={setD3}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateSg} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA VESÍCULA VITELÍNICA (VV) */}
            {topicId === 'vv' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira a Idade Gestacional baseada no Comprimento Cabeça-Nádega (CCN) para comparar os limites de normalidade da Vesícula Vitelínica (VV).
                </Text>

                <View style={[styles.inputRow, { marginBottom: 12 }]}>
                  <View style={{ width: '48%' }}>
                    <Text style={styles.inputLabel}>Semanas *</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 5"
                      value={calcWeeks}
                      onChangeText={setCalcWeeks}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={{ width: '48%' }}>
                    <Text style={styles.inputLabel}>Dias</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 3"
                      value={calcDays}
                      onChangeText={setCalcDays}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>Diâmetro da VV medido (mm) - Opcional</Text>
                  <TextInput
                    style={[styles.calcInput, { width: '100%' }]}
                    placeholder="Ex.: 3.2"
                    value={measuredVv}
                    onChangeText={setMeasuredVv}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateVv} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA COMPRIMENTO CABEÇA-NÁDEGA (CCN) */}
            {topicId === 'ccn' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira o Comprimento Cabeça-Nádega (CCN) medido em milímetros para estimar a idade gestacional.
                </Text>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>CCN medido (mm) *</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 45"
                    value={ccnVal}
                    onChangeText={setCcnVal}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateCcn} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA FREQUÊNCIA CARDÍACA (FCE) */}
            {topicId === 'fce' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira o Comprimento Cabeça-Nádega (CCN) do embrião para obter os percentis normativos de FCE de referência.
                </Text>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>CCN do embrião (mm) *</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 10"
                    value={ccnFce}
                    onChangeText={setCcnFce}
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>FCE medida (bpm) - Opcional</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 140"
                    value={fceBpm}
                    onChangeText={setFceBpm}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateFce} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA TRANSLUCÊNCIA NUCAL (TN) */}
            {topicId === 'tn' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira o Comprimento Cabeça-Nádega (CCN) do feto (deve estar entre 45 e 84 mm) para obter a curva de percentis de normalidade da TN.
                </Text>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>CCN fetal (mm) *</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 65"
                    value={ccnTn}
                    onChangeText={setCcnTn}
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>TN medida (mm) - Opcional</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 1.8"
                    value={tnMm}
                    onChangeText={setTnMm}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateTn} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA DIÂMETRO BIPARIETAL (DBP) */}
            {topicId === 'dbp_cc' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira o Diâmetro Biparietal (DBP) em milímetros para estimar a idade gestacional.
                </Text>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>DBP medido (mm) *</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 32"
                    value={dbpVal}
                    onChangeText={setDbpVal}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateDbp} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA CIRCUNFERÊNCIA ABDOMINAL (CA) */}
            {topicId === 'ca' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira a Circunferência Abdominal (CA) em milímetros para estimar a idade gestacional.
                </Text>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>CA medida (mm) *</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 110"
                    value={caVal}
                    onChangeText={setCaVal}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateCa} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA COMPRIMENTO DO FÊMUR (CF) */}
            {topicId === 'cf' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira o Comprimento do Fêmur (CF) em milímetros para estimar a idade gestacional.
                </Text>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>CF medido (mm) *</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 25"
                    value={cfVal}
                    onChangeText={setCfVal}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateCf} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA LÍQUIDO AMNIÓTICO (ILA) */}
            {topicId === 'ila' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira a medida total de ILA ou os valores individuais dos 4 quadrantes em milímetros.
                </Text>

                <View style={[styles.inputRow, { marginBottom: 12 }]}>
                  <View style={{ width: '48%' }}>
                    <Text style={styles.inputLabel}>Quadrante Q1 (mm)</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 35"
                      value={q1}
                      onChangeText={setQ1}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={{ width: '48%' }}>
                    <Text style={styles.inputLabel}>Quadrante Q2 (mm)</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 40"
                      value={q2}
                      onChangeText={setQ2}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={[styles.inputRow, { marginBottom: 12 }]}>
                  <View style={{ width: '48%' }}>
                    <Text style={styles.inputLabel}>Quadrante Q3 (mm)</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 30"
                      value={q3}
                      onChangeText={setQ3}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={{ width: '48%' }}>
                    <Text style={styles.inputLabel}>Quadrante Q4 (mm)</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 25"
                      value={q4}
                      onChangeText={setQ4}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>OU: Medida Total de ILA (mm)</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 130"
                    value={ilaVal}
                    onChangeText={setIlaVal}
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>Idade Gestacional (semanas) - Opcional</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 28"
                    value={weeksInput}
                    onChangeText={setWeeksInput}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateIla} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA PESO FETAL (HADLOCK) */}
            {topicId === 'peso_fetal' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira a biometria fetal (DBP, CA e CF em mm) para calcular a estimativa de peso fetal (Hadlock 3 parâmetros) e plotar na curva.
                </Text>

                <View style={[styles.inputRow, { marginBottom: 12 }]}>
                  <View style={{ width: '31%' }}>
                    <Text style={styles.inputLabel}>DBP (mm) *</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 50"
                      value={dbpVal}
                      onChangeText={setDbpVal}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={{ width: '31%' }}>
                    <Text style={styles.inputLabel}>CA (mm) *</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 150"
                      value={caVal}
                      onChangeText={setCaVal}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={{ width: '31%' }}>
                    <Text style={styles.inputLabel}>CF (mm) *</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 32"
                      value={cfVal}
                      onChangeText={setCfVal}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>Idade Gestacional (semanas) - Opcional</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 24"
                    value={weeksInput}
                    onChangeText={setWeeksInput}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculatePesoFetal} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA DOPPLER (ACM E AU) */}
            {(topicId === 'acm' || topicId === 'au') && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira a Idade Gestacional e os índices medidos para comparar com a curva de normalidade.
                </Text>

                <View style={[styles.inputRow, { marginBottom: 12 }]}>
                  <View style={{ width: '48%' }}>
                    <Text style={styles.inputLabel}>Idade Gestacional (semanas) *</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 28"
                      value={weeksInput}
                      onChangeText={setWeeksInput}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={{ width: '48%' }}>
                    <Text style={styles.inputLabel}>Índice Pulsatilidade (IP)</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 1.2"
                      value={ipInput}
                      onChangeText={setIpInput}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                {topicId === 'acm' ? (
                  <View style={{ width: '100%', marginBottom: 12 }}>
                    <Text style={styles.inputLabel}>Razão AU/ACM (Opcional)</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 0.6"
                      value={ratioInput}
                      onChangeText={setRatioInput}
                      keyboardType="numeric"
                    />
                  </View>
                ) : (
                  <View style={{ width: '100%', marginBottom: 12 }}>
                    <Text style={styles.inputLabel}>Índice Resistência (IR)</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 0.65"
                      value={irInput}
                      onChangeText={setIrInput}
                      keyboardType="numeric"
                    />
                  </View>
                )}

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateDoppler} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA OSSOS LONGOS E VENTRÍCULOS */}
            {(topicId === 'umero' || topicId === 'radio' || topicId === 'ulna' || topicId === 'tibia' || topicId === 'fibula' || topicId === 'vl' || topicId === 'on' || topicId === 'pn') && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira a Idade Gestacional e a medida em milímetros para comparar com a curva de percentis.
                </Text>

                <View style={[styles.inputRow, { marginBottom: 12 }]}>
                  <View style={{ width: '48%' }}>
                    <Text style={styles.inputLabel}>Idade Gestacional (semanas) *</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 22"
                      value={weeksInput}
                      onChangeText={setWeeksInput}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={{ width: '48%' }}>
                    <Text style={styles.inputLabel}>Medida (mm) *</Text>
                    <TextInput
                      style={styles.calcInput}
                      placeholder="Ex.: 3.5"
                      value={lenInput}
                      onChangeText={setLenInput}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity 
                    style={styles.calculateBtn} 
                    onPress={
                      topicId === 'on' ? handleCalculateOn :
                      topicId === 'pn' ? handleCalculatePn :
                      handleCalculateBones
                    } 
                    activeOpacity={0.8}
                  >
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA DTC */}
            {topicId === 'dtc' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira o Diâmetro Transcerebelar (DTC) em milímetros para estimar a idade gestacional.
                </Text>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>DTC medido (mm) *</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 20"
                    value={dtcInput}
                    onChangeText={setDtcInput}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateDtc} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* CALCULADORA DB */}
            {topicId === 'db' && (
              <View style={styles.calculatorForm}>
                <Text style={styles.sectionDesc}>
                  Insira a Distância Binocular (DB) em milímetros para estimar a idade gestacional.
                </Text>

                <View style={{ width: '100%', marginBottom: 12 }}>
                  <Text style={styles.inputLabel}>DB medido (mm) *</Text>
                  <TextInput
                    style={styles.calcInput}
                    placeholder="Ex.: 30"
                    value={dbInput}
                    onChangeText={setDbInput}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.calcActionRow}>
                  <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculateDb} activeOpacity={0.8}>
                    <Text style={styles.calculateBtnText}>Calcular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.clearBtn} onPress={handleClearCalculator} activeOpacity={0.8}>
                    <Text style={styles.clearBtnText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* RESULTADO SACO GESTACIONAL (SG) */}
            {topicId === 'sg' && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Resultado do Saco Gestacional</Text>
                
                <View style={styles.resultMainRow}>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>DMSG Média</Text>
                    <Text style={styles.resultItemValue}>{calcResult.dmsg} mm</Text>
                  </View>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Idade Gestacional</Text>
                    <Text style={[styles.resultItemValue, { color: '#35B48B' }]}>
                      {calcResult.weeks} sem e {calcResult.days} dias
                    </Text>
                  </View>
                </View>

                <View style={styles.formulaDivider} />
                <Text style={styles.formulaName}>Fórmula de Hellman: IG = DMSG + 25 dias</Text>
                <Text style={styles.formulaDays}>Total: {calcResult.totalDays} dias gestacionais</Text>
                
                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Verificações Clínicas Críticas:</Text>
                  <Text style={styles.alertRow}>
                    {parseFloat(calcResult.dmsg) >= 10 ? '✅' : '⚠️'} DMSG {calcResult.dmsg} mm: Vesícula vitelínica deve ser visível (DMSG ≥ 10mm transvaginal).
                  </Text>
                  <Text style={styles.alertRow}>
                    {parseFloat(calcResult.dmsg) >= 25 ? '✅' : '⚠️'} DMSG {calcResult.dmsg} mm: O embrião deve ser visível (DMSG ≥ 25mm).
                  </Text>
                </View>
              </View>
            )}

            {/* RESULTADO VESÍCULA VITELÍNICA (VV) */}
            {topicId === 'vv' && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Limites de Normalidade da VV</Text>
                
                <View style={styles.resultMainRow}>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Média Esperada</Text>
                    <Text style={styles.resultItemValue}>{calcResult.mean} mm</Text>
                  </View>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Limite Superior</Text>
                    <Text style={[styles.resultItemValue, { color: '#B45309' }]}>
                      {calcResult.upperLimit} mm
                    </Text>
                  </View>
                </View>

                {calcResult.measuredVal !== null && (
                  <>
                    <View style={styles.formulaDivider} />
                    <Text style={styles.formulaName}>Diâmetro Inserido: {calcResult.measuredVal} mm</Text>
                    <Text style={[styles.formulaDays, { 
                      fontWeight: '700', 
                      color: calcResult.status.includes('Crítico') || calcResult.status.includes('Alterado') ? '#EF4444' : '#10B981' 
                    }]}>
                      Status Clínico: {calcResult.status}
                    </Text>
                  </>
                )}

                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Dica de Referência Rápida:</Text>
                  <Text style={styles.alertRow}>
                    • Independentemente da IG, em gestações normais a vesícula vitelínica deve medir até **6.0 mm**.
                  </Text>
                  <Text style={styles.alertRow}>
                    • Diâmetros maiores que 6.0 mm correlacionam-se clinicamente a taxas elevadas de perdas gestacionais prematuras ou malformações cromossômicas.
                  </Text>
                </View>
              </View>
            )}

            {/* RESULTADO FREQUÊNCIA CARDÍACA (FCE) */}
            {topicId === 'fce' && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Resultado da Frequência Cardíaca</Text>
                
                <View style={styles.resultMainRow}>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>FCE Média (50th)</Text>
                    <Text style={styles.resultItemValue}>{calcResult.mean} bpm</Text>
                  </View>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Percentis (5th - 95th)</Text>
                    <Text style={[styles.resultItemValue, { color: '#35B48B' }]}>
                      {calcResult.p5} - {calcResult.p95} bpm
                    </Text>
                  </View>
                </View>

                {calcResult.measuredVal !== null && (
                  <>
                    <View style={styles.formulaDivider} />
                    <Text style={styles.formulaName}>FCE Inserida: {calcResult.measuredVal} bpm</Text>
                    <Text style={[styles.formulaDays, { 
                      fontWeight: '700', 
                      color: calcResult.status.includes('Bradicardia') || calcResult.status.includes('Taquicardia') ? '#EF4444' : '#10B981' 
                    }]}>
                      Status Clínico: {calcResult.status}
                    </Text>
                  </>
                )}

                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Bradicardia & Taquicardia (FEBRASGO):</Text>
                  <Text style={styles.alertRow}>
                    • **Bradicardia:** &lt; 100 bpm antes de 6.2 sem (CCN ~4mm) ou &lt; 120 bpm entre 6.3 - 7 sem.
                  </Text>
                  <Text style={styles.alertRow}>
                    • **Taquicardia:** &gt; 135 bpm antes de 6.2 sem ou &gt; 155 bpm entre 6.3 - 7 sem.
                  </Text>
                </View>
              </View>
            )}

            {/* RESULTADO TRANSLUCÊNCIA NUCAL (TN) */}
            {topicId === 'tn' && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Resultado da Translucência Nucal</Text>
                
                <View style={styles.resultMainRow}>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>TN Média (50th)</Text>
                    <Text style={styles.resultItemValue}>{calcResult.mean.toFixed(2)} mm</Text>
                  </View>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Percentis (5th - 95th)</Text>
                    <Text style={[styles.resultItemValue, { color: '#35B48B' }]}>
                      {calcResult.p5.toFixed(2)} - {calcResult.p95.toFixed(2)} mm
                    </Text>
                  </View>
                </View>

                {calcResult.measuredVal !== null && (
                  <>
                    <View style={styles.formulaDivider} />
                    <Text style={styles.formulaName}>Medida de TN Inserida: {calcResult.measuredVal} mm</Text>
                    <Text style={[styles.formulaDays, { 
                      fontWeight: '700', 
                      color: calcResult.status.includes('Aumentada') || calcResult.status.includes('Alterada') ? '#EF4444' : '#10B981' 
                    }]}>
                      Status Clínico: {calcResult.status}
                    </Text>
                  </>
                )}

                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Nota de Aconselhamento Clínico:</Text>
                  <Text style={styles.alertRow}>
                    • Uma medida de TN **&gt;= 2.5 mm** é classicamente associada a maior incidência de trissomias cromossômicas e cardiopatias congênitas estruturais.
                  </Text>
                </View>
              </View>
            )}

            {/* RESULTADO CCN / DBP / CA / CF */}
            {(topicId === 'ccn' || topicId === 'dbp_cc' || topicId === 'ca' || topicId === 'cf') && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Estimativa de Idade Gestacional</Text>
                
                <View style={styles.resultMainRow}>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Idade Gestacional</Text>
                    <Text style={[styles.resultItemValue, { color: '#35B48B', fontSize: 20 }]}>
                      {calcResult.weeks} sem e {calcResult.days} dias
                    </Text>
                  </View>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Desvio Padrão (±)</Text>
                    <Text style={styles.resultItemValue}>{calcResult.dpVal} dias</Text>
                  </View>
                </View>

                {topicId === 'ccn' && calcResult.ccn >= 7 && (
                  <View style={styles.clinicalAlerts}>
                    <Text style={styles.alertHeader}>Verificação Crítica de Viabilidade:</Text>
                    <Text style={styles.alertRow}>
                      • ✅ CCN {calcResult.ccn} mm: A atividade cardíaca do embrião deve estar obrigatoriamente visível na varredura (CCN >= 7 mm).
                    </Text>
                  </View>
                )}

                {topicId === 'ca' && calcResult.ca !== calcResult.caMatched && (
                  <>
                    <View style={styles.formulaDivider} />
                    <Text style={styles.formulaName}>* Nota: Medida de {calcResult.ca} mm aproximada para {calcResult.caMatched} mm para correspondência na tabela de datação.</Text>
                  </>
                )}

                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Informações Clínicas Importantes:</Text>
                  <Text style={styles.alertRow}>
                    {topicId === 'ccn' 
                      ? '• O CCN é a medida biométrica mais precisa do primeiro trimestre. Se houver diferença de até 7 dias em relação à DUM, mantenha a datação pela DUM.'
                      : '• No segundo e terceiro trimestres, a acurácia da datação por biometria diminui gradualmente à medida que a gestação avança devido à variação do potencial genético.'
                    }
                  </Text>
                </View>
              </View>
            )}

            {/* RESULTADO LÍQUIDO AMNIÓTICO (ILA) */}
            {topicId === 'ila' && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Resultado do Índice de Líquido Amniótico</Text>

                <View style={styles.resultMainRow}>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>ILA Total</Text>
                    <Text style={[styles.resultItemValue, { color: '#35B48B' }]}>{calcResult.totalIla} mm</Text>
                  </View>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Avaliação Clínica</Text>
                    <Text style={[styles.resultItemValue, { 
                      fontSize: 13, 
                      color: calcResult.status.includes('Crítico') ? '#EF4444' : calcResult.status.includes('Reduzido') ? '#F59E0B' : '#10B981'
                    }]}>
                      {calcResult.status}
                    </Text>
                  </View>
                </View>

                {(calcResult.valQ1 > 0 || calcResult.valQ2 > 0) && (
                  <>
                    <View style={styles.formulaDivider} />
                    <Text style={styles.formulaName}>Medidas dos Quadrantes:</Text>
                    <Text style={styles.formulaDays}>
                      Q1: {calcResult.valQ1}mm | Q2: {calcResult.valQ2}mm | Q3: {calcResult.valQ3}mm | Q4: {calcResult.valQ4}mm
                    </Text>
                  </>
                )}

                {calcResult.percentiles && (
                  <>
                    <View style={styles.formulaDivider} />
                    <Text style={styles.formulaName}>Percentis de Moore ({calcResult.weeks} semanas):</Text>
                    <Text style={styles.formulaDays}>
                      Percentil 5: {calcResult.percentiles.p5}mm | Percentil 50: {calcResult.percentiles.p50}mm | Percentil 95: {calcResult.percentiles.p95}mm
                    </Text>
                  </>
                )}

                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Parâmetros de Alerta Clínico (Moore):</Text>
                  <Text style={styles.alertRow}>
                    • **Oligoidrâmnio (baixo líquido):** ILA ≤ 50 mm (ou abaixo do Percentil 5 para a idade gestacional).
                  </Text>
                  <Text style={styles.alertRow}>
                    • **Polihidrâmnio (excesso de líquido):** ILA ≥ 250 mm (ou acima do Percentil 95 para a idade gestacional).
                  </Text>
                </View>
              </View>
            )}

            {/* RESULTADO PESO FETAL (HADLOCK) */}
            {topicId === 'peso_fetal' && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Estimativa de Peso Fetal (EFW)</Text>

                <View style={styles.resultMainRow}>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Peso Estimado</Text>
                    <Text style={[styles.resultItemValue, { color: '#35B48B', fontSize: 24 }]}>{calcResult.efw} g</Text>
                  </View>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Classificação</Text>
                    <Text style={[styles.resultItemValue, { 
                      fontSize: 13, 
                      color: calcResult.classification.includes('PIG') || calcResult.classification.includes('GIG') ? '#EF4444' : '#10B981'
                    }]}>
                      {calcResult.classification}
                    </Text>
                  </View>
                </View>

                <View style={styles.formulaDivider} />
                <Text style={styles.formulaName}>Fórmula Hadlock (3 Parâmetros): DBP={calcResult.dbp}mm, CA={calcResult.ca}mm, CF={calcResult.cf}mm</Text>

                {calcResult.percentiles && (
                  <>
                    <View style={styles.formulaDivider} />
                    <Text style={styles.formulaName}>Percentis Hadlock ({calcResult.weeks} semanas):</Text>
                    <Text style={styles.formulaDays}>
                      Percentil 10: {calcResult.percentiles.p10}g | Percentil 50: {calcResult.percentiles.p50}g | Percentil 90: {calcResult.percentiles.p90}g
                    </Text>
                  </>
                )}

                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Classificação Nutricional Fetal:</Text>
                  <Text style={styles.alertRow}>
                    • **PIG (Pequeno para IG):** Peso estimado abaixo do Percentil 10. Indica monitoramento de Doppler para afastar insuficiência útero-placentária.
                  </Text>
                  <Text style={styles.alertRow}>
                    • **GIG (Grande para IG):** Peso estimado acima do Percentil 90. Frequente em diabetes gestacional.
                  </Text>
                </View>
              </View>
            )}

            {/* RESULTADO DOPPLER (ACM OU AU) */}
            {(topicId === 'acm' || topicId === 'au') && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Resultado da Avaliação Dopplerfluxométrica</Text>

                <View style={styles.resultMainRow}>
                  {topicId === 'acm' ? (
                    <>
                      <View style={styles.resultItem}>
                        <Text style={styles.resultItemLabel}>IP ACM Medido</Text>
                        <Text style={styles.resultItemValue}>{calcResult.ip || '-'}</Text>
                      </View>
                      <View style={styles.resultItem}>
                        <Text style={styles.resultItemLabel}>Razão AU/ACM</Text>
                        <Text style={[styles.resultItemValue, { color: '#35B48B' }]}>{calcResult.ratio || '-'}</Text>
                      </View>
                    </>
                  ) : (
                    <>
                      <View style={styles.resultItem}>
                        <Text style={styles.resultItemLabel}>IR AU Medido</Text>
                        <Text style={styles.resultItemValue}>{calcResult.ir || '-'}</Text>
                      </View>
                      <View style={styles.resultItem}>
                        <Text style={styles.resultItemLabel}>IP AU Medido</Text>
                        <Text style={[styles.resultItemValue, { color: '#35B48B' }]}>{calcResult.ip || '-'}</Text>
                      </View>
                    </>
                  )}
                </View>

                {topicId === 'acm' ? (
                  <>
                    <View style={styles.formulaDivider} />
                    <Text style={styles.formulaName}>Status IP ACM: <Text style={{ color: calcResult.statusIp.includes('Centralização') ? '#EF4444' : '#10B981', fontWeight: 'bold' }}>{calcResult.statusIp}</Text></Text>
                    <Text style={styles.formulaDays}>
                      Valores ACM IP esperados ({calcResult.weeks} sem): P5={calcResult.percentilesIp.p5} | P50={calcResult.percentilesIp.p50} | P95={calcResult.percentilesIp.p95}
                    </Text>
                    <Text style={[styles.formulaDays, { marginTop: 4 }]}>
                      Razão AU/ACM esperada ({calcResult.weeks} sem): P5={calcResult.percentilesRatio.p5} | P50={calcResult.percentilesRatio.p50} | P95={calcResult.percentilesRatio.p95}
                    </Text>
                  </>
                ) : (
                  <>
                    <View style={styles.formulaDivider} />
                    <Text style={styles.formulaName}>Status IR AU: <Text style={{ color: calcResult.statusIr.includes('Aumentada') ? '#EF4444' : '#10B981', fontWeight: 'bold' }}>{calcResult.statusIr}</Text></Text>
                    <Text style={styles.formulaDays}>
                      Valores AU IR esperados ({calcResult.weeks} sem): P5={calcResult.percentilesIr.p5} | P50={calcResult.percentilesIr.p50} | P95={calcResult.percentilesIr.p95}
                    </Text>
                    <Text style={[styles.formulaDays, { marginTop: 4 }]}>
                      Valores AU IP esperados ({calcResult.weeks} sem): P5={calcResult.percentilesIp.p5} | P50={calcResult.percentilesIp.p50} | P95={calcResult.percentilesIp.p95}
                    </Text>
                  </>
                )}

                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Nota Clínica Importante:</Text>
                  <Text style={styles.alertRow}>
                    {topicId === 'acm'
                      ? '• Centralização fetal ocorre quando o IP da ACM cai abaixo do Percentil 5, indicando fluxo protetor cerebral diante de hipóxia crônica.'
                      : '• O aumento de resistência placentária (IP/IR da AU acima do Percentil 95) é um indicador precoce de insuficiência placentária crônica.'
                    }
                  </Text>
                </View>
              </View>
            )}

            {/* RESULTADO OSSOS LONGOS / VL */}
            {(topicId === 'umero' || topicId === 'radio' || topicId === 'ulna' || topicId === 'tibia' || topicId === 'fibula' || topicId === 'vl') && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Resultado da Biometria ({data.title})</Text>

                <View style={styles.resultMainRow}>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Medida Inserida</Text>
                    <Text style={styles.resultItemValue}>{calcResult.measuredLength} mm</Text>
                  </View>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Avaliação Clínica</Text>
                    <Text style={[styles.resultItemValue, { 
                      fontSize: 13, 
                      color: calcResult.status.includes('Crítico') || calcResult.status.includes('Encurtamento') || calcResult.status.includes('Ventriculomegalia') ? '#EF4444' : '#10B981'
                    }]}>
                      {calcResult.status}
                    </Text>
                  </View>
                </View>

                <View style={styles.formulaDivider} />
                <Text style={styles.formulaName}>Percentis de Normalidade para {calcResult.weeks} semanas:</Text>
                <Text style={styles.formulaDays}>
                  {topicId === 'vl' ? 'Percentil 3 (Mín): ' : 'Percentil 3 (Mín): '}{calcResult.percentiles.p3} mm | Percentil 50 (Mediana): {calcResult.percentiles.p50} mm | Percentil 97 (Máx): {calcResult.percentiles.p97} mm
                </Text>

                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Nota Clínica:</Text>
                  <Text style={styles.alertRow}>
                    {topicId === 'vl'
                      ? '• Ventrículo lateral abaixo de 10mm é adequado. Medidas entre 10-15mm indicam ventriculomegalia leve/moderada, e acima de 15mm sugerem hidrocefalia/ventriculomegalia grave.'
                      : '• Comprimento do osso longo abaixo do Percentil 3 é sugestivo de encurtamento significativo (avaliar displasia esquelética).'
                    }
                  </Text>
                </View>
              </View>
            )}

            {/* RESULTADO ON / PN */}
            {(topicId === 'on' || topicId === 'pn') && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Resultado da Biometria ({data.title})</Text>

                <View style={styles.resultMainRow}>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Medida Inserida</Text>
                    <Text style={styles.resultItemValue}>{calcResult.measuredLength} mm</Text>
                  </View>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Avaliação Clínica</Text>
                    <Text style={[styles.resultItemValue, { 
                      fontSize: 12, 
                      color: calcResult.status.includes('Crítico') || calcResult.status.includes('Hipoplasia') || calcResult.status.includes('Espessada') ? '#EF4444' : '#10B981'
                    }]}>
                      {calcResult.status}
                    </Text>
                  </View>
                </View>

                <View style={styles.formulaDivider} />
                <Text style={styles.formulaName}>Percentis de Normalidade para {calcResult.weeks} semanas:</Text>
                <Text style={styles.formulaDays}>
                  Percentil 3 (Mín): {calcResult.percentiles.p3} mm | Percentil 50 (Mediana): {calcResult.percentiles.p50} mm | Percentil 95 (Máx): {calcResult.percentiles.p95} mm
                </Text>

                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Nota Clínica:</Text>
                  <Text style={styles.alertRow}>
                    {topicId === 'on'
                      ? '• A ausência ou hipoplasia grave do osso nasal (abaixo do Percentil 3) no segundo trimestre é um marcador secundário (soft marker) importante para trissomias, principalmente a Síndrome de Down.'
                      : '• A prega nucal espessada (PN ≥ 6.0 mm ou acima do Percentil 95) entre 16 e 24 semanas é o marcador mais sensível para Síndrome de Down no segundo trimestre, associando-se também a cardiopatias congênitas.'
                    }
                  </Text>
                </View>
              </View>
            )}

            {/* RESULTADO DTC */}
            {topicId === 'dtc' && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Datação por Diâmetro Transcerebelar (DTC)</Text>

                <View style={styles.resultMainRow}>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Idade Gestacional Estimada (50th)</Text>
                    <Text style={[styles.resultItemValue, { color: '#35B48B', fontSize: 18 }]}>
                      {calcResult.weeks} sem e {calcResult.days} dias
                    </Text>
                  </View>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>DTC Medido</Text>
                    <Text style={styles.resultItemValue}>{calcResult.dtc} mm</Text>
                  </View>
                </View>

                <View style={styles.formulaDivider} />
                <Text style={styles.formulaName}>Variação dos Percentis (Mínimo ao Máximo):</Text>
                <Text style={styles.formulaDays}>
                  • Percentil 5 (IG Mínima): {calcResult.weeksMin} sem e {calcResult.daysMin} dias
                </Text>
                <Text style={styles.formulaDays}>
                  • Percentil 95 (IG Máxima): {calcResult.weeksMax} sem e {calcResult.daysMax} dias
                </Text>

                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Acurácia e Estabilidade:</Text>
                  <Text style={styles.alertRow}>
                    • O Diâmetro Transcerebelar é altamente resistente a compressões extrínsecas do crânio, sendo excelente para datar gestações em casos de braquicefalia ou dolicocefalia.
                  </Text>
                </View>
              </View>
            )}

            {/* RESULTADO DB */}
            {topicId === 'db' && calcResult && (
              <View style={styles.calcResultCard}>
                <Text style={styles.cardTitle}>Datação por Distância Binocular (DB)</Text>

                <View style={styles.resultMainRow}>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>Idade Gestacional Estimada (50th)</Text>
                    <Text style={[styles.resultItemValue, { color: '#35B48B', fontSize: 18 }]}>
                      {calcResult.weeks} sem e {calcResult.days} dias
                    </Text>
                  </View>
                  <View style={styles.resultItem}>
                    <Text style={styles.resultItemLabel}>DB Medida</Text>
                    <Text style={styles.resultItemValue}>{calcResult.db} mm</Text>
                  </View>
                </View>

                <View style={styles.formulaDivider} />
                <Text style={styles.formulaName}>Variação dos Percentis (Mínimo ao Máximo):</Text>
                <Text style={styles.formulaDays}>
                  • Percentil 5 (IG Mínima): {calcResult.weeksMin} sem e {calcResult.daysMin} dias
                </Text>
                <Text style={styles.formulaDays}>
                  • Percentil 95 (IG Máxima): {calcResult.weeksMax} sem e {calcResult.daysMax} dias
                </Text>

                <View style={styles.clinicalAlerts}>
                  <Text style={styles.alertHeader}>Nota Clínica:</Text>
                  <Text style={styles.alertRow}>
                    • A Distância Binocular (DB) é uma ferramenta valiosa de datação no segundo trimestre e triagem para distúrbios da linha média facial (hipertelorismo e hipotelorismo).
                  </Text>
                </View>
              </View>
            )}

          </View>
        )}

        {/* ABA 3: EXAME (PONTOS-CHAVE CLÍNICOS) */}
        {selectedMenu === 'Exame' && (
          <View style={styles.tabContent}>
            <View style={styles.pointsCard}>
              <Text style={styles.pointsCardTitle}>Pontos-chave Clínicos</Text>
              
              {data.points.map((p, idx) => (
                <View key={idx} style={styles.bulletItem}>
                  <Text style={styles.bulletSymbol}>•</Text>
                  <Text style={styles.bulletContent}>{p}</Text>
                </View>
              ))}
            </View>

            <View style={styles.attentionBox}>
              <Text style={styles.attentionTitle}>⚠️ Atenção / Conduta</Text>
              <Text style={styles.attentionText}>
                {data.attention}
              </Text>
            </View>
          </View>
        )}

        {/* ABA 4: TÉCNICA (SCANNING GUIDELINES & CALIPERS) */}
        {selectedMenu === 'Tecnica' && (
          <View style={styles.tabContent}>
            <Text style={styles.sectionDesc}>
              Abaixo é apresentada a técnica de ultrassom correta e o posicionamento de calipers 1:1 recomendado pela FEBRASGO e diretrizes clínicas:
            </Text>

            <View style={styles.illustrationCard}>
              <Image 
                source={images[data.imageKey]} 
                style={styles.illustrationImage} 
                resizeMode="cover"
              />
              <View style={styles.illustrationFooter}>
                <Text style={styles.illustrationTitle}>{data.techniqueTitle}</Text>
                <Text style={styles.illustrationText}>
                  {data.techniqueDesc}
                </Text>
              </View>
            </View>

            <View style={[styles.pointsCard, { marginTop: 20 }]}>
              <Text style={styles.pointsCardTitle}>Diretrizes Técnicas de Varredura</Text>
              {data.scanningDetails.map((step, index) => (
                <View key={index} style={{ marginBottom: 12 }}>
                  <Text style={{ fontFamily: 'Inter', fontWeight: '700', fontSize: 13, color: '#35B48B' }}>
                    {index + 1}. {step.title}
                  </Text>
                  <Text style={{ fontFamily: 'Inter', fontSize: 12, color: '#4B5563', marginTop: 2, lineHeight: 17 }}>
                    {step.desc}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#F9FAFB',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  badge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
  },
  badgeText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 9,
    color: '#35B48B',
    letterSpacing: 0.5,
  },
  subTitle: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
  tabContent: {
    width: '100%',
  },
  sectionDesc: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 19,
    marginBottom: 20,
  },
  calculatorForm: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputContainer: {
    width: '31%',
  },
  inputLabel: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 6,
  },
  calcInput: {
    height: 44,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#1F2937',
    fontFamily: 'Inter',
  },
  calcActionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    gap: 10,
  },
  calculateBtn: {
    backgroundColor: '#35B48B',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  calculateBtnText: {
    fontFamily: 'Inter',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  clearBtn: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  clearBtnText: {
    fontFamily: 'Inter',
    color: '#4B5563',
    fontWeight: '600',
    fontSize: 14,
  },
  calcResultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#35B48B',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 15,
    color: '#1F2937',
    marginBottom: 12,
  },
  resultMainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  resultItem: {
    flex: 1,
  },
  resultItemLabel: {
    fontFamily: 'Inter',
    fontSize: 11,
    color: '#6B7280',
    marginBottom: 4,
  },
  resultItemValue: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '800',
    color: '#1F2937',
  },
  formulaDivider: {
    height: 1,
    backgroundColor: '#F1F1F1',
    marginVertical: 14,
    width: '100%',
  },
  formulaName: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: '#4B5563',
  },
  formulaDays: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  clinicalAlerts: {
    marginTop: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    width: '100%',
  },
  alertHeader: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 12,
    color: '#374151',
    marginBottom: 8,
  },
  alertRow: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#4B5563',
    lineHeight: 18,
    marginBottom: 6,
  },
  pointsCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 20,
    marginBottom: 20,
  },
  pointsCardTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 16,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 14,
    width: '100%',
  },
  bulletSymbol: {
    fontSize: 16,
    color: '#35B48B',
    fontWeight: 'bold',
    marginRight: 10,
    lineHeight: 18,
  },
  bulletContent: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 19,
  },
  attentionBox: {
    backgroundColor: '#FFFBEB',
    borderColor: '#FDE68A',
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 16,
  },
  attentionTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 14,
    color: '#B45309',
    marginBottom: 6,
  },
  attentionText: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#78350F',
    lineHeight: 18,
  },
  illustrationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  illustrationImage: {
    width: '100%',
    height: 220,
    backgroundColor: '#F3F4F6',
  },
  illustrationFooter: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
  },
  illustrationTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 15,
    color: '#1F2937',
    marginBottom: 6,
  },
  illustrationText: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
  },
});
