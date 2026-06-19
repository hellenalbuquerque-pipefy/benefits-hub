const SEARCH_DATA = [
  // EMOCIONAL
  { id:'apoio-psicologico', title:'Apoio Psicológico', desc:'R$ 525/mês subsidiados pela Pipefy via Keiken. Sessões de terapia na rede credenciada ou reembolso.', tags:'terapia psicólogo saúde mental keiken bem-estar sessão', pilar:'Emocional', pilarColor:'#FFA726', url:'pilares/emocional.html' },
  { id:'assistencia-pet', title:'Assistência Pet', desc:'Plano de saúde veterinária para cães e gatos via Meu Pet Club. Adesão opcional, desconto em folha.', tags:'pet cachorro gato veterinário plano meu pet club animal', pilar:'Emocional', pilarColor:'#FFA726', url:'pilares/emocional.html' },
  { id:'seguro-de-vida', title:'Seguro de Vida', desc:'Cobertura de 24x o salário base, 100% custeado pela Pipefy via Prudential.', tags:'seguro vida morte invalidez prudential proteção família', pilar:'Emocional', pilarColor:'#FFA726', url:'pilares/emocional.html' },
  { id:'assistencia-funeral', title:'Assistência Funeral', desc:'Cobertura de até R$ 8.000 para despesas funerárias. Titular, cônjuge e filhos.', tags:'funeral óbito falecimento cobertura prudential', pilar:'Emocional', pilarColor:'#FFA726', url:'pilares/emocional.html' },
  { id:'licenca-casamento', title:'Licença Casamento', desc:'7 dias consecutivos de licença remunerada. Válida por 12 meses após o evento.', tags:'casamento licença folga união estável matrimônio', pilar:'Emocional', pilarColor:'#FFA726', url:'pilares/emocional.html' },
  { id:'licenca-parental', title:'Licença Parental', desc:'Maternidade: 180 dias. Paternidade: 35 a 90 dias conforme tempo de empresa.', tags:'maternidade paternidade licença filho bebê adoção nascimento guarda', pilar:'Emocional', pilarColor:'#FFA726', url:'pilares/emocional.html' },
  { id:'cesta-natalidade', title:'Cesta Natalidade', desc:'R$ 350 em cartão benefício por filho. Solicitar antes de 90 dias de vida do bebê.', tags:'cesta natalidade bebê filho nascimento presente kit newborn', pilar:'Emocional', pilarColor:'#FFA726', url:'pilares/emocional.html' },
  { id:'licenca-pet', title:'Licença Pet', desc:'2 dias remunerados para adoção ou falecimento de cão ou gato.', tags:'licença pet cachorro gato adoção falecimento folga animal', pilar:'Emocional', pilarColor:'#FFA726', url:'pilares/emocional.html' },
  { id:'licenca-luto', title:'Licença Luto', desc:'7 dias: 2 imediatos e 5 flexíveis em até 3 meses. Para falecimento de familiar.', tags:'luto falecimento familiar morte licença folga dias', pilar:'Emocional', pilarColor:'#FFA726', url:'pilares/emocional.html' },

  // FINANCEIRO
  { id:'caju', title:'Cartão Caju', desc:'R$ 1.965/mês em alimentação, educação, mobilidade, saúde e cultura.', tags:'caju cartão alimentação refeição mercado ifood delivery mobilidade educação cultura saúde vale', pilar:'Financeiro', pilarColor:'#4CAF50', url:'pilares/financeiro.html' },
  { id:'home-office', title:'Ajuda de Custo Home Office', desc:'R$ 270/mês para remoto e híbrido. Cobre energia, internet e infraestrutura.', tags:'home office ajuda custo remoto híbrido internet energia infraestrutura trabalho em casa', pilar:'Financeiro', pilarColor:'#4CAF50', url:'pilares/financeiro.html' },
  { id:'escolaridade', title:'Assistência Escolaridade Infantil e Babá', desc:'R$ 450/mês por filho de 4 meses a 10 anos para escola, creche ou babá.', tags:'escola creche babá filho criança escolaridade auxílio educação infantil matrícula', pilar:'Financeiro', pilarColor:'#4CAF50', url:'pilares/financeiro.html' },
  { id:'nutricional', title:'Assistência Nutricional Complementar', desc:'R$ 242/mês por bebê no primeiro ano de vida para alimentação complementar.', tags:'nutricional leite fórmula papinha bebê primeiro ano alimentação complementar', pilar:'Financeiro', pilarColor:'#4CAF50', url:'pilares/financeiro.html' },
  { id:'antecipacao', title:'Antecipação Salarial', desc:'Antecipe parte do salário pelo app Creditas em caso de necessidade.', tags:'antecipação salário creditas dinheiro emergência adiantamento', pilar:'Financeiro', pilarColor:'#4CAF50', url:'pilares/financeiro.html' },
  { id:'educacao-financeira', title:'Educação Financeira', desc:'Programa gratuito de educação financeira via Creditas para colaboradores Pipefy.', tags:'educação financeira creditas finanças orçamento planejamento dinheiro', pilar:'Financeiro', pilarColor:'#4CAF50', url:'pilares/financeiro.html' },

  // SOCIAL
  { id:'day-off', title:'Day Off de Aniversário', desc:'1 dia de folga remunerada no mês do aniversário. Solicite no Apdata.', tags:'aniversário day off folga férias data comemorativa', pilar:'Social', pilarColor:'#26A69A', url:'pilares/social.html' },
  { id:'horario-flexivel', title:'Horário de Trabalho Flexível', desc:'Autonomia para organizar sua jornada dentro da carga semanal contratada.', tags:'horário flexível trabalho jornada autonomia entrada saída remoto híbrido', pilar:'Social', pilarColor:'#26A69A', url:'pilares/social.html' },
  { id:'conta-pipefy', title:'Conta Pessoal no Pipefy', desc:'Licença Enterprise gratuita para uso pessoal com até 10 membros.', tags:'pipefy conta pessoal licença enterprise cupom honeybadger', pilar:'Social', pilarColor:'#26A69A', url:'pilares/social.html' },
  { id:'viagens', title:'Desconto em Viagens e Hospedagens', desc:'Tarifas corporativas para passagens e hotéis via OnHappy. R$ 100 de boas-vindas.', tags:'viagem passagem hotel hospedagem onhappy desconto férias viagens aéreo', pilar:'Social', pilarColor:'#26A69A', url:'pilares/social.html' },

  // OCUPACIONAL
  { id:'mobiliario', title:'Auxílio Mobiliário e Conforto', desc:'Reembolso de até R$ 2.300 para montar o home office ergonômico.', tags:'mobiliário cadeira mesa monitor teclado mouse headset setup ergonomia home office reembolso', pilar:'Ocupacional', pilarColor:'#8E24AA', url:'pilares/ocupacional.html' },
  { id:'coworking', title:'Coworking', desc:'Acesso a espaços de coworking via Woba quando o home office não é suficiente.', tags:'coworking woba espaço trabalho escritório foco produtividade', pilar:'Ocupacional', pilarColor:'#8E24AA', url:'pilares/ocupacional.html' },

  // FÍSICO
  { id:'plano-saude', title:'Plano de Saúde', desc:'100% subsidiado pela Pipefy. SulAmérica ou Unimed, cobertura nacional com apartamento.', tags:'plano saúde sulamerica unimed médico hospital consulta exame cobertura dependente', pilar:'Físico', pilarColor:'#E91E8C', url:'pilares/fisico.html' },
  { id:'plano-odonto', title:'Plano Odontológico', desc:'100% subsidiado. SulAmérica Odonto ou Unimed Odonto para titular e dependentes.', tags:'plano odontológico dentista dente ortodontia sulamerica unimed odonto', pilar:'Físico', pilarColor:'#E91E8C', url:'pilares/fisico.html' },
  { id:'pipo', title:'Pipo Saúde', desc:'Concierge de saúde com teleconsultas, encaminhamentos e Programa Pinguim.', tags:'pipo saúde teleconsulta médico encaminhamento receita rede credenciada pinguim gestante adoção', pilar:'Físico', pilarColor:'#E91E8C', url:'pilares/fisico.html' },
  { id:'wellhub', title:'Wellhub', desc:'Academia, estúdios e apps de bem-estar. Planos Starter e Basic gratuitos.', tags:'wellhub academia ginástica estúdio personal exercício fitness bem-estar yoga pilates', pilar:'Físico', pilarColor:'#E91E8C', url:'pilares/fisico.html' },

  // INTELECTUAL
  { id:'auxilio-educacao', title:'Auxílio Educação', desc:'R$ 307/mês no Saldo Caju para cursos, graduação, idiomas e livros.', tags:'educação curso graduação pós idioma livro aprendizado caju saldo estudo', pilar:'Intelectual', pilarColor:'#E53935', url:'pilares/intelectual.html' },
  { id:'udemy', title:'Udemy Business', desc:'Acesso gratuito e ilimitado a milhares de cursos online.', tags:'udemy curso online aprendizado hard skill soft skill treinamento certificado', pilar:'Intelectual', pilarColor:'#E53935', url:'pilares/intelectual.html' },
  { id:'parceria-idiomas', title:'Parcerias em Idiomas', desc:'Descontos exclusivos em inglês com Beetools e Rockfeller.', tags:'inglês idioma curso beetools rockfeller fluência language escola', pilar:'Intelectual', pilarColor:'#E53935', url:'pilares/intelectual.html' },
  { id:'parceria-tech', title:'Parcerias em Tech e Gestão', desc:'Até 40% de desconto em cursos EBAC e FIAP.', tags:'ebac fiap tech gestão curso design programação data ciência tecnologia desconto', pilar:'Intelectual', pilarColor:'#E53935', url:'pilares/intelectual.html' },

  // COMUNITÁRIO
  { id:'dib', title:'DIB — Maurício Munarini', desc:'Grupo voluntário de Honey Badgers dedicado a diversidade, inclusão e pertencimento.', tags:'dib diversidade inclusão pertencimento lgbtq mulheres negros neurodivergente voluntário honey badger', pilar:'Comunitário', pilarColor:'#FF6B35', url:'pilares/comunitario.html' },
  { id:'pipefy-for-good', title:'#PipefyForGood', desc:'Canal no Slack para ações filantrópicas e iniciativas socioambientais.', tags:'pipefy for good voluntariado filantropia social ambiental slack ação impacto', pilar:'Comunitário', pilarColor:'#FF6B35', url:'pilares/comunitario.html' },
];