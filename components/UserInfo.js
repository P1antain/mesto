export default class UserInfo {
    constructor(userNameSection, userInfoSection) {
        this._userNameSection = document.querySelector(userNameSection);
        this._userInfoSection = document.querySelector(userInfoSection);
    }
    getUserInfo() {
        return {
            name: this._userNameSection.textContent,
            info: this._userInfoSection.textContent,
        };
    }

    setUserInfo(data) {
        this._userNameSection.textContent = data.name;
        this._userInfoSection.textContent = data.info;
    }
}