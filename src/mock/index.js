import Mock from 'mockjs'
const data = () => {
    Mock.mock('/stone/api', {
        'list|1-10': [{
            'id|+1': 1
        }]
    })
}
export default data();