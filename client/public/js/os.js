const os = function os() {
    let con = '';
    let newCon = '';
    return new Promise((resolve, reject) => {
        axios({
            type: 'GET',
            url: 'http://localhost:5555/api/osInfo',
            dataType: 'json'
        }).then(function (resp) {
            if (resp.status == 200) {
                con = resp.data.data;
                // console.log('osInfo', con);
                newCon = insertDrame(con);
                // console.log(newCon);
                resolve(newCon);
            }
        }).catch(function (err) {
            console.log(err);
            reject(err);
        })
    })
}

function insertDrame(data) {
    // let fragment = document.createDocumentFragment(); //创建文档片段
    const arr = Object.keys(data);
    // console.log(data[arr[1]]);
    let html = '';
    for (let i in data) {
        // let dl = document.createElement('dl');
        if (data[i].name) {
            // console.log(data[i].name)
            html += `<dl>
            <dt>${data[i].name}：</dt>
            <dd>${data[i].cpuslist[0].model}</dd>
            </dl>
            `;
        } else {
            html += `<dl>
            <dt>${data[i].split('-')[0]}：</dt>
            <dd>${data[i].split('-')[1]}</dd>
            </dl>
            `;
        }
    }
    return html;
}
export default os;