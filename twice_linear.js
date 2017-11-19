function dblLinear(n) {
    var l=[1]
    var y,z
    var i=0
    var j=0
    
   // while(l.length < n+1)
    for(;l.length != n+1;){
        if(2* l[i] +1 > 3* l[j] +1){
            if (l.indexOf(3* l[j] +1) == -1)
                l[l.length]=(3* l[j] +1)
                j++
            }
        else{
            if (l.indexOf(2* l[i] +1) == -1)
                l[l.length]=(2* l[i] +1)
                i++

            }
    }
    return l[n]
}