module.exports = function check(str, bracketsConfig) {
    let conf =  bracketsConfig.map(el => el.join(''));
    for (let i=0; i<30; i++) {
        for (br of conf) {
            let str_new = str;
            if (br == '()' || br == '[]' || br == '||') {
                regex = new RegExp(`\\${br[0]}\\${br[1]}`, 'g');
                str = str_new.replace(regex, '');
            } else {
                let regex = new RegExp(`${br}`, 'g');
                str = str_new.replace(regex, '');
            }
        }   
    }
    return (str.length == 0)
}
