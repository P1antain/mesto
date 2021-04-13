export class Api{
    constructor(config) {
        this._url = config.url;
        this._token = config.authorization;
    }

    _checkData(res){
        if(!res.ok){
            return Promise.reject(`Ошибка : ${res.status}`)
        }
        return res.json()
    }

    getCard(){
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers:{
                authorization: this._token
            }
        })
            .then(this._checkData)
    }
    getUser() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkData);
    }
    getData(){
        return Promise.all([this.getUser(), this.getCard()])
    }
}