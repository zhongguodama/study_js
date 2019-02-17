/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var set = new Set()
    emails.forEach(function(email){
        set.add(getEmail(email))
    })
    return set.size
};

var getEmail = function(email){
    [name, addr] = email.split('@')
    nameBeforePlus = name.split('+')[0]
    nameWithoutDot = nameBeforePlus.split('.').join('')
    return nameWithoutDot + '@' + addr
}