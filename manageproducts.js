const productMangingList=[
    {nameofproduct:"Danone Curd",price:3,typeofproduct:"curd",suppliers:"Danone",quantity:12},
    {nameofproduct:"Viva Milk",price:6.50,typeofproduct:"milk",suppliers:"Viva",quantity:6},
    {nameofproduct:"Tilda Basmatic Rice",price:3,typeofproduct:"rice",suppliers:"VT cash and carry",quantity:10},
    {nameofproduct:"Amul Ghee",price:3,typeofproduct:"ghee",suppliers:"Durga Suppliers",quantity:2}
    ]
    function getProductMangingList(){
        return getProductMangingList;
    }
    module.exports.productMangingList=getProductMangingList;
    //ProductsMangingList
    console.log(productMangingList);
    //Users List
    const userList=require('ecommerceuserlist');
    console.log(userList.getUsersList());
    //Suppliers List
    const suppliersList=require('suppliers');
    console.log(suppliersList.getSuppliers());
    //Bankers List
    const bankersList=require('bankers');
    console.log(bankersList.bankinglist());