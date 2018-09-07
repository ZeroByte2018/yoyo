import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'
import Orders from './components/Orders'
import OrdersManage from './components/ordersManage/OrdersManage'



import Contact from './components/about/Contact'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'

import AllOrders from './components/ordersManage/AllOrders'
import Deliveried from './components/ordersManage/Deliveried'
import FinishedOrders from './components/ordersManage/FinishedOrders'
import UnDelivery from './components/ordersManage/UnDelivery'


export const routes = [
	{path:"/", name:'homeLink', component:Home},
	{path:"/menu", component:Menu},
	{path:"/admin", component:Admin},
	{path:"/orders", component:Orders},
	{path:"/ordersmanage", component:OrdersManage, redirect:"/ordersmanage/allorders", children:[
		{path:"/ordersmanage/allorders", name:'allordersLink', component:AllOrders},
		{path:"/ordersmanage/deliveried", name:'deliveriedLink', component:Deliveried},
		{path:"/ordersmanage/finishedorders", name:'finishedordersLink', component:FinishedOrders},
		{path:"/ordersmanage/undelivery", name:'undeliveryLink', component:UnDelivery},
	]},
	{path:"/login", name:'loginLink', component:Login},
	{path:"/register", component:Register},
	{path:"/about", component:About, children:[
		{path:"/about/history", name:'historyLink', component:History},
		{path:"/about/contact", name:'contactLink', component:Contact},
		{path:"/about/delivery", name:'deliveryLink', component:Delivery},
		{path:"/about/orderingGuide", name:'orderingGuideLink', component:OrderingGuide},
	]},
	{path:"*", redirect:"/"},
]