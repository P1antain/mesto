export default class UserInfo {
    constructor(userNameSection, userInfoSection) {
        this._userNameSection = document.querySelector(userNameSection);
        this._userInfoSection = document.querySelector(userInfoSection);
    }
    getUserInfo() {
        return {
            inputProfileName: this._userNameSection.textContent,
            inputProfileInfo: this._userInfoSection.textContent,
        };
    }

    setUserInfo(data) {
        this._userNameSection.textContent = data.inputProfileName;
        this._userInfoSection.textContent = data.inputProfileInfo;
    }
}