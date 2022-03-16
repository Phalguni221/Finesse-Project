
const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
    <h3><img src="https://media.istockphoto.com/photos/suspicious-cat-portrait-picture-id472160419?b=1&k=20&m=472160419&s=170667a&w=0&h=yeSSPKr2ws7nNaV2hR3G-CIDQLtqYSOdPRv_oyP3jcc=" alt="Irritated Cat"/></h3>
            </div>
          </main>
      </Def>
    )
  }

  module.exports= error404