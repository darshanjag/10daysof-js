function isPositive(a) {
    
        try {
            if (a > 0) {
                throw "YES"
            }
            if (a == 0) {
                throw "Zero Error"
            }
            if (a < 0) {
                throw "Negative Error"
            }
        } catch (e) { 

            return e
        }
    }
    