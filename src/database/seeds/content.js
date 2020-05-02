exports.seed = (knex) => knex('content').del()
  .then(async () => knex('content').insert([
    {
      id: 1,
      type: 'text',
      title: 'Como investir no Brasil morando no exterior?',
      description: 'Brasileiros que vivem fora do país podem investir? Saiba quais são as regras específicas para fazer investimentos no país e as alternativas.',
      body: 'Essa é uma questão que varia bastante. Pois a resposta depende do local em que você possui o domicílio fiscal.\nA maioria dos brasileiros quando se mudam do Brasil fazem a declaração de saída definitiva do país para a Receita Federal. O que muitas vezes é o mais apropriado até para não ter que fazer duas declarações de Imposto de Renda e, às vezes, até pagar mais IR do que precisa.\nSe você fez a declaração de saída do Brasil e por isso não declara Imposto de Renda no Brasil, então você é um Investidor Não Residente.\nInvestidor Não Residente é o brasileiro que se mudou para o exterior e fez a declaração de saída definitiva para a Receita Federal ou o investidor de outra nacionalidade que não mora o Brasil.\n(Esta situação é regulamentada pela Resolução 4.373 de 29 de setembro de 2014).',
      author: 'Viviane Ferreira',
      imageUrl: 'https://mepoupenaweb.uol.com.br/wp-content/uploads/2018/06/Como-investir-no-Brasil-morando-no-exterior-.jpg',
      sourceUrl: 'https://mepoupenaweb.uol.com.br/dicas-de-riqueza/como-investir-no-brasil-morando-no-exterior/',
      category: 'investimentos',
    },
    {
      id: 2,
      type: 'text',
      title: '6 Motivos que te impedem de economizar dinheiro (e como mudar isso!)',
      description: 'Todo mês você se propõe a economizar dinheiro, mas algo te atrapalha? Existem motivos para além de “não sobra dinheiro” que estão dificultando o alcance da sua meta. Alguns você conhece, outros…iiiii Vai ter de ler!',
      body: 'Só de ouvir falar sobre economizar dinheiro você já pensa em desistir ou logo pensa que isso é muito difícil e que não é pra você. Falar de dinheiro por si só já é complicado para a maioria das pessoas. É um grande tabu, o que se dirá então de economizar dinheiro?',
      author: 'Leila Sleiman',
      sourceUrl: 'https://mepoupenaweb.uol.com.br/dicas-de-riqueza/6-motivos-que-te-impedem-de-economizar-dinheiro/',
      imageUrl: 'https://mepoupenaweb.uol.com.br/wp-content/uploads/2020/04/20_04_27_blog-1-1.png',
      category: 'investimentos',
    },
  ]));
