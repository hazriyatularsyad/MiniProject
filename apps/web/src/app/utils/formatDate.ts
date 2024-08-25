export const formatDate =(tanggal:string) => {
    const generate = new Date(tanggal)
    const format = Intl.DateTimeFormat('id-ID', {
        dateStyle: 'medium'
        
    })
    return format.format(generate)
}