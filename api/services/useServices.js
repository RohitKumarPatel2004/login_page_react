const db=require('../database')

const user=(async(req,res)=>{
    try {
        const sql = "INSERT INTO login (name, email, password, cpassword) VALUES (?, ?, ?, ?)";
        const values = [
          req.body.name,
          req.body.email,
          req.body.password,
          req.body.cpassword
        ];
        console.log(values)
      
        db.query(sql, values, (err, data) => {
          if (err) {
            console.error(err);
            return res.status(500).json();
          }
          console.log(data)
          return data

        });
        
    } catch (error) {

        return res.status(500).json();
        
    }

})

const user1=(async(req,res)=>{

    try {
          const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  
  db.query(sql, [req.body.email, req.body.password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.length > 0) {
   
      return results[0];

    } else {
      
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
    
})

module.exports={user,user1}

