import React from 'react';
import './App.css';

function App() {

  const [userInfos, setUserInfos] = React.useState({
    name: '',
    age: '', 
    country: ''
  })

  const urlAPI = 'https://api.agify.io?name='
  // const [userAge, setUserAge] = React.useState('')
  // const [userName, setUserName] = React.useState('')
  // const [userCountry, setUserCountry] = React.useState('')
  const codeCountries =  [{code: "GB", name: "United Kingdom"}, {code: "ZA", name: "South Africa"}, {code: "PT", name: "Portugal"}, {code: "FR", name: "France"}]

  const fetchAgeFromName = (e) => {
    e.preventDefault();
    // if (userName !== ''){
    if (userInfos.name !== ''){
      // fetch(urlAPI + userName + (userCountry !== '' ? '&country_id=' + userCountry : ''))
      fetch(urlAPI + userInfos.name + (userInfos.country !== '' ? '&country_id=' + userInfos.country : ''))
      .then(response => response.json())
        .then(data => {
          console.log(data)
          // setUserAge(data.age)
          setUserInfos({...userInfos, age: data.age})
        });
    }
  }

  // Display options in the select field with given values
  const Option = (props) => {
    return (
      <option value={props.code}>{props.name}</option>
    )
  }


  return (
    <div className="App">
      <h1>Cette appli est inutile</h1>
      <form>
        <fieldset>
          <div className="main-form">
            <label>Prénom : </label>
            {/*<input type="text" placeholder="Jules" id="userName" name="userName" onChange={(event) => setUserName(event.target.value)}/>*/}
            <input type="text" placeholder="Jules" id="userName" name="userName" onChange={(event) => setUserInfos({...userInfos, name: event.target.value})}/>
            <input type="submit" value="Estimer ?!" onClick={fetchAgeFromName} />
          </div>
          <div className="main-form">
            <label>Pays : </label>
            {/*<select id="userCountry" name="userCountry" onChange={(event) => setUserCountry(event.target.value)}>*/}
            <select id="userCountry" name="userCountry" onChange={(event) => setUserInfos({...userInfos, country: event.target.value})}>
              <option>Choisissez un pays…</option>
              {codeCountries.map((country, key) => Option(country))}
            </select>
          </div>
        </fieldset>
      </form>

      <div className="age-result">
        <figure>
          {/*<img src="https://c.tenor.com/Dy5sAPoDT0QAAAAC/wow-wink.gif" alt="Wow!" title="Wow!" className={(userAge === '' ? 'hidden-image' : 'shown-image')} />*/}
          <img src="https://c.tenor.com/Dy5sAPoDT0QAAAAC/wow-wink.gif" alt="Wow!" title="Wow!" className={(userInfos.age === '' ? 'hidden-image' : 'shown-image')} />
          {/*<figcaption>{userAge}</figcaption>*/}
          <figcaption>{userInfos.age}</figcaption>
        </figure>
      </div>

      <footer>Une API codée avec les pieds, dans un footer, c'est pas si mal…</footer>

    </div>
  );
}

export default App;
