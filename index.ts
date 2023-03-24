const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  res.setHeader('Acess-Control-Allow-Origin', "*")
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get('/', (req, res) => {
  res.send(
    {
      "Campeonato Brasileiro": [    "1980",    "1982",    "1983",    "1987",    "1992",    "2009",    "2019",    "2020"  ],
      "Copa do Brasil": [    "1990",    "2006",    "2013",    "2019",  "2022"  ],
      "Copa Libertadores da América": [    "1981",    "2019",    "2022"  ],
      "Supercopa do Brasil": [    "2020"  ],
      "Recopa Sul-Americana": [    "2020"  ],
      "Copa Mercosul": [    "1999"  ],
      "Copa dos Campeões": [    "2001"  ],
      "Torneio Rio-São Paulo": [    "1961",    "1962",    "1997"  ],
      "Campeonato Carioca": [    "1914",    "1915",    "1920",    "1921",    "1925",    "1927",    "1939",    "1942",    "1943",    "1944",    "1953",    "1954",    "1955",    "1963",    "1965",    "1972",    "1974",    "1978",    "1979",    "1981",    "1986",    "1991",    "1996",    "1999",    "2000",    "2001",    "2004",    "2007",    "2008",    "2009",    "2011",    "2014",    "2017",    "2019",    "2020",    "2021",    "2022"  ],
      "Taça Guanabara": [    "1970",    "1972",    "1973",    "1978",    "1979",    "1980",    "1981",    "1982",    "1984",    "1988",    "1989",    "1996",    "1999",    "2001",    "2004",    "2018",    "2019",    "2020",    "2021"  ],
      "Taça Rio": [    "1983",    "1985",    "1986",    "1988",    "1991",    "1996",    "2000",    "2001",    "2004",    "2009",    "2011",    "2019",    "2020"  ]
    }
    
  )
})

app.listen(port, () => {

})

module.exports = app