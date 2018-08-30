export default (link) => {
    return new Promise((resolve, reject) => {
        chayns.showWaitCursor();
        fetch(link)
            .then((response) => {
                return (response.json());
            }).then((data) => {
                console.log('parsed json', data)
                resolve(data);
            }).catch((ex) => {
                console.log('parsing failed', ex);
                reject(ex);
            }).finally(() => chayns.hideWaitCursor());
    }); 
}
