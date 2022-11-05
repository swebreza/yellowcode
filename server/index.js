const express = require('express')

const app = express()
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
const Splitwise = require('splitwise')
const sw = Splitwise({
  consumerKey: '0BQ8KjbxCpgOttRR2ucR55bSBBpre3hHxBogEzNv',
  consumerSecret: 'iWi6eVJBUU2Xs6cb0hnIhDVvMbbWtfAWTZfw7DW4',
})

app.get('/getCurrentUser', (req, res) => {
  sw.getCurrentUser().then((id) => res.status(200).json({ success: true, id }))
})

const group_id = '60131288'

app.post('/createCurrentExpenses', (req, res) => {
  Promise.all([
    sw.getGroup({ id: group_id }),
    sw.getExpenses({ id: group_id }),
    sw.getCurrentUser(),
  ])
    .then(([group, expenses, me]) => {
      return sw.createDebt({
        from: group.members[0].id,
        to: me.id,
        group_id: group_id,
        description: expenses[0].description,
        amount: 100,
      })
    })
    .then((data) => res.status(200).json({ success: true, data }))
    .catch((error) => {
      console.log(error)
      return res.status(400).json({ success: false, error })
    })
})

app.listen(3000, () => {
  console.log('server is running')
})
