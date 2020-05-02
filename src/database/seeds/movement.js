exports.seed = (knex) => knex('movement').del()
  .then(async () => knex('movement').insert([
    {
      title: 'Picpay *Mesabrasilgo',
      type: 'debit',
      value: 600,
      date: '2020-05-01T23:13:05Z',
      category: 'outros',
    },
    {
      date: '2020-04-15T07:18:19.565Z',
      title: 'Recebido',
      type: 'credit',
      value: 10000,
    },
    {
      date: '2020-02-15T07:18:19.565Z',
      title: 'Recebido',
      type: 'credit',
      value: 5000,
    },
    {
      title: 'Picpay *Hospitaldeamo',
      type: 'debit',
      value: 1000,
      date: '2020-05-01T23:12:30Z',
      category: 'outros',
    },
    {
      title: 'Amazonprimebr',
      type: 'debit',
      value: 990,
      date: '2020-04-27T22:33:46Z',
      category: 'educação',
    },
    {
      title: 'Panificadora Veneza',
      type: 'debit',
      value: 1700,
      date: '2020-04-27T21:45:11Z',
      category: 'alimentação',
    },
    {
      title: 'Paypal *Kaikecerato',
      type: 'debit',
      value: 500,
      date: '2020-04-27T03:08:55Z',
      category: 'outros',
    },
    {
      title: 'Paypal *Kaikecerato',
      type: 'debit',
      value: 500,
      date: '2020-04-27T03:07:41Z',
      category: 'outros',
    },
    {
      title: 'Paypal do Brasil',
      type: 'debit',
      value: 50,
      date: '2020-04-27T03:07:26Z',
      category: 'outros',
    },
    {
      title: 'Vitor Hugo do Nascimen',
      type: 'debit',
      value: 2900,
      date: '2020-04-25T01:13:05Z',
      category: 'alimentação',
    },
    {
      title: 'Gran Fornetto Pizzaria',
      type: 'debit',
      value: 3696,
      date: '2020-04-19T01:29:14Z',
      category: 'alimentação',
    },
    {
      title: 'Aiqfome Ltda',
      type: 'debit',
      value: 3100,
      date: '2020-04-17T01:04:15Z',
      category: 'alimentação',
    },
    {
      title: 'Amazon.Com.Br',
      type: 'debit',
      value: 28900,
      date: '2020-04-15T02:44:56Z',
      category: 'educação',
    },
    {
      title: 'Aiqfome Ltda',
      type: 'debit',
      value: 2600,
      date: '2020-04-14T00:24:07Z',
      category: 'alimentação',
    },
    {
      title: 'Acom Mkt Place',
      type: 'debit',
      value: 31661,
      date: '2020-04-10T23:47:47Z',
      category: 'outros',
    },
    {
      title: 'Pg *Gamers Club',
      type: 'debit',
      value: 2990,
      date: '2020-04-09T02:45:06Z',
      category: 'outros',
    },
    {
      title: 'Amazonprimebr',
      type: 'debit',
      value: 114,
      date: '2020-04-05T19:33:48Z',
      category: 'educação',
    },
  ]));
