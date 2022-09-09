import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    token: '',
    userId: '',
    user: '',
    komentari: [],
    tagoviVest: [],
    allTagovi: [],
    vestiDatum: [],
    tagVest: [],
    najcitanije: [],
    korisnici: [],
    kategorijeList: [],
    vestKategorijaList: [],
    update: []

  },
  mutations: {

    userId(state, userId){
      state.userId = userId;
      localStorage.userId = userId
    },

    user(state,user){
      state.user = user;
      localStorage.user = user
    },

    removeUserId(state){
      state.userId = '';
      localStorage.userId = '';
    },

    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    addTagVest( state, tagVest){
      state.tagVest.push(tagVest)
    },

    addNajcitanije(state, najcitanije){
      state.najcitanije.push(najcitanije)
    },

    addAllTagovi(state, allTagovi){
      state.allTagovi.push(allTagovi)
    },

    addTagoviVest(state, tagoviVest){
      state.tagoviVest.push(tagoviVest)
    },

    addKorisnici(state,korisnici){
      state.korisnici.push(korisnici)
    },

    addKomentari(state, komentari){
      state.komentari.push(komentari)
    },


    addVestiDatum(state, vestiDatum){
      state.vestiDatum.push(vestiDatum)
    },

    addKategorijeList(state, kategorijeList){
      state.kategorijeList.push(kategorijeList)
    },

    addVestKategorijaList(state,vestKategorijaList){
      state.vestKategorijaList.push(vestKategorijaList)
    },


    addUpdate(state, update){
      state.update = update
    }

  },
  actions: {

    socket_oglas_auto({ commit }, msg) {
      const rec = JSON.parse(msg);
      commit('addUpitAuto', rec);
    },

    socket_oglas_motor({ commit }, msg) {
      const rec = JSON.parse(msg);
      commit('addUpitMotor', rec);
    },


    fetchVestiDatum({ commit }) {
      var item
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/vest/date', {
        method: 'GET',
        })
        .then( res => res.json() )
        .then( data => {
          this.state.vestiDatum = []
            data.forEach(element => {
              item = {id: element.id, naslov: element.naslov, text: element.text, vreme_kreiranja: element.vremeKreiranja, 
                broj_poseta: element.brojPoseta, fk_korisnik: element.fk_korisnik, fk_kategorija:element.fk_kategorija}
          
              commit('addVestiDatum', item);
            });
            resolve(this.state.vestiDatum);
        });
      })
    },

    fetchVestTag({ commit }, id) {
      var item
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/tag/' + id + '/tagvest', {
        method: 'GET',
        })
        .then( res => res.json() )
        .then( data => {
          this.state.tagVest = []
            data.forEach(element => {
              item = {id: element.id, naslov: element.naslov, text: element.text, vreme_kreiranja: element.vremeKreiranja, 
                broj_poseta: element.brojPoseta, fk_korisnik: element.fk_korisnik, fk_kategorija:element.fk_kategorija}
          
              commit('addTagVest', item);
            });
            resolve(this.state.tagVest);
        });
      })
    },

    fetchKomentari({ commit }, id) {
      var item
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/komentar/' + id, {
        method: 'GET',
        })
        .then( res => res.json() )
        .then( data => {
          this.state.komentari = []
            data.forEach(element => {
              item = {id: element.id, autor: element.autor, text: element.text, datum: element.datum, fk_vest: element.fk_vest}
          
              commit('addKomentari', item);
            });
            resolve(this.state.komentari);
        });
      })
    },

    fetchKorisnici({ commit }) {
      var item
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/korisnik/admin', {
        method: 'GET',
        })
        .then( res => res.json() )
        .then( data => {
          this.state.korisnici = []
            data.forEach(element => {
              item = {id: element.id, ime: element.ime, prezime: element.prezime, email: element.email, tip: element.tip,
              status: element.status,  }
          
              commit('addKorisnici', item);
            });
            resolve(this.state.korisnici);
        });
      })
    },

    fetchNajcitanije({ commit }) {
      var item
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/vest/najcitanije', {
        method: 'GET',
        })
        .then( res => res.json() )
        .then( data => {
          this.state.najcitanije = []
            data.forEach(element => {
              item = {id: element.id, naslov: element.naslov, text: element.text, vreme_kreiranja: element.vremeKreiranja, 
                broj_poseta: element.brojPoseta, fk_korisnik: element.fk_korisnik, fk_kategorija:element.fk_kategorija}
              console.log(item);
              commit('addNajcitanije', item);
            });
            resolve(this.state.najcitanije);
        });
      })
    },

    fetchKategorijeList({ commit }) {
      var item
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/kategorija', {
        method: 'GET',
        })
        .then( res => res.json() )
        .then( data => {
          this.state.kategorijeList = []
            data.forEach(element => {
              item = {id: element.id, ime: element.ime, opis: element.opis}
          
              commit('addKategorijeList', item);
            });
            resolve(this.state.kategorijeList);
        });
      })
    },

    getAllTagoviSve({ commit }) {
      var item
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/tag', {
        method: 'GET',
        })
        .then( res => res.json() )
        .then( data => {
          this.state.allTagovi = []
            data.forEach(element => {
              item = {id: element.id, tag: element.tag}
          
              commit('addAllTagovi', item);
            });
            resolve(this.state.allTagovi);
        });
      })
    },

    

    vestKategorija({ commit }, obj) {
      var item
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/kategorija/vest/' + obj, {
        method: 'GET'
        })
        .then( res => res.json() )
        .then( data => {
          this.state.vestKategorijaList = []
            data.forEach(element => {
              item = {id: element.id, naslov: element.naslov, text: element.text, vreme_kreiranja: element.vremeKreiranja, 
                broj_poseta: element.brojPoseta, fk_korisnik: element.fk_korisnik, fk_kategorija:element.fk_kategorija}
          
              commit('addVestKategorijaList', item);
            });
            resolve(this.state.vestKategorijaList);
        });
      })
    },

    getTagoviVest({ commit }, obj) {
      var item
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/tag/' + obj, {
        method: 'GET'
        })
        .then( res => res.json() )
        .then( data => {
          this.state.tagoviVest = []
            data.forEach(element => {
              item = {id: element.id, tag: element.tag}
          
              commit('addTagoviVest', item);
            });
            resolve(this.state.tagoviVest);
        });
      })
    },

    addKategorija(nmp, obj) {
      fetch('http://localhost:8080/api/kategorija', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        
    },

    findVest({commit}, id){ // dohvatanje samo jedne vesti
      return new Promise( (resolve) => {
          fetch("http://localhost:8080/api/vest/" + id)
          .then(obj => obj.json())
          .then(res => {
            resolve(res);
            commit;
          });
      });
    },

    deleteKategorija(nmp, obj) {
      fetch('http://localhost:8080/api/kategorija/' + obj, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
        
    },

    deleteVest(nmp, obj) {
      fetch('http://localhost:8080/api/vest/' + obj, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
        
    },

    deleteKorisnik(nmp, obj) {
      fetch('http://localhost:8080/api/korisnik/admin/' + obj, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
        
    },

    addKomentar(nmp, obj) {
      console.log(obj);
      fetch('http://localhost:8080/api/komentar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        
    },


    addVest({ commit }, obj){
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/vest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': `Bearer ${localStorage.token}` },
        body: JSON.stringify(obj)
      })
      .then( res => res.json())
      .then((data) => {
        resolve(data);
        commit;
      });
      })
    },

    addTag({ commit }, obj){
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/tag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': `Bearer ${localStorage.token}` },
        body: JSON.stringify(obj)
      })
      .then( res => res.json())
      .then((data) => {
        resolve(data);
        commit;
      });
      })
    },

    addVestTag({ commit }, obj){
      return new Promise( (resolve) => {
        fetch('http://localhost:8080/api/vestTag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': `Bearer ${localStorage.token}` },
        body: JSON.stringify(obj)
      })
      .then( res => res.json())
      .then((data) => {
        resolve(data);
        commit;
      });
      })
    },

    updateKategorija(nmp, obj) {
      fetch('http://localhost:8080/api/kategorija/', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
        
    },

    updateBrojPoseta(nmp, obj) {
      fetch('http://localhost:8080/api/vest', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
        
    },

    updateVest(nmp, obj) {
      fetch('http://localhost:8080/api/vest/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
        
    },

    updateKorisnik(nmp, obj) {
      fetch('http://localhost:8080/api/korisnik/admin', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
        
    },
  

    register(nmp, obj) {
      fetch('http://localhost:8080/api/korisnik/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        
    },

    login({ commit }, obj) {
      fetch('http://localhost:8080/api/korisnik/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        console.log(tkn);
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)
          commit('userId', tkn.id)
          commit('user', tkn.role)
        }
      });
    }

  },
  modules: {
  }
})
