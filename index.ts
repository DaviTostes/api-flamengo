const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true, 
  optionSuccessStatus:200
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send(
    {
      "CampeonatoBrasileiro": [    "1980",    "1982",    "1983",    "1987",    "1992",    "2009",    "2019",    "2020"  ],
      "CopadoBrasil": [    "1990",    "2006",    "2013",    "2019",  "2022"  ],
      "CopaLibertadoresdaAmérica": [    "1981",    "2019",    "2022"  ],
      "SupercopadoBrasil": [    "2020"  ],
      "RecopaSul-Americana": [    "2020"  ],
      "CopaMercosul": [    "1999"  ],
      "CopadosCampeões": [    "2001"  ],
      "TorneioRio-SãoPaulo": [    "1961",    "1962",    "1997"  ],
      "CampeonatoCarioca": [    "1914",    "1915",    "1920",    "1921",    "1925",    "1927",    "1939",    "1942",    "1943",    "1944",    "1953",    "1954",    "1955",    "1963",    "1965",    "1972",    "1974",    "1978",    "1979",    "1981",    "1986",    "1991",    "1996",    "1999",    "2000",    "2001",    "2004",    "2007",    "2008",    "2009",    "2011",    "2014",    "2017",    "2019",    "2020",    "2021",    "2022"  ],
      "TaçaGuanabara": [    "1970",    "1972",    "1973",    "1978",    "1979",    "1980",    "1981",    "1982",    "1984",    "1988",    "1989",    "1996",    "1999",    "2001",    "2004",    "2018",    "2019",    "2020",    "2021"  ],
      "TaçaRio": [    "1983",    "1985",    "1986",    "1988",    "1991",    "1996",    "2000",    "2001",    "2004",    "2009",    "2011",    "2019",    "2020"  ]
    }
    
  )
})

app.listen(port, () => {

})

module.exports = app