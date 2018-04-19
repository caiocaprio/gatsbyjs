import React from 'react'
import Link from 'gatsby-link'

const IndexPlanosPage = () => (
  <div>
    <h1>Planos</h1>
    <p>Escolha seu Plano PMG</p>
    <ul>
      <li><Link to="/planos/p">Plano P</Link></li>
      <li><Link to="/planos/m">Plano M</Link></li>
      <li><Link to="/planos/g">Plano G</Link></li><br/>
      <li><Link to="/">Voltar par Home</Link></li>
    </ul>
  </div>
)  

export default IndexPlanosPage 