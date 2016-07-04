!function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/buyer/views/index.view.html",'<div class="container-fluid"><div class="dashboard-row"><div class="dashboard-notification"><div class="icon-container -product-all"><i class="mdi mdi-account-circle"></i></div><div class="text-container"><div class="title -oneline">ผู้ซื้อทั้งหมด</div><div class="counter">5</div></div></div></div><buyer-list title="ผู้ซื้อทั้งหมด"></buyer-list></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/core/views/403.view.html",'<div class="container"><h1 class="text-center">403: not authorized.</h1></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/core/views/404.view.html",'<div class="container"><h1 class="text-center">404: not found.</h1></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/core/views/index.view.html",'<div class="signin-container"><div class="signin-form"><div class="header">SIGN IN TO&nbsp;<span class="brand">CARELOT</span>&nbsp;ADMINISTRATION</div><div class="input-group"><i class="mdi mdi-account"></i> <input name="username" type="text" placeholder="Username" class="input"><div class="line"></div></div><div class="input-group"><i class="mdi mdi-lock"></i> <input name="password" type="password" placeholder="Password" class="input"><div class="line"></div></div><button ui-sref="core.dashboard.index" type="button" class="button -block">SIGNIN</button></div></div><div class="bg-image"></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/core/views/main.layout.view.html",'<navbar></navbar><div class="carelot-container"><sidebar></sidebar><div class="content-container" ui-view=""></div></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/core/views/main.view.html",'<div ui-view=""></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/dashboard/views/index.view.html",'<div class="dashboard-title">สิ่งที่ต้องทำ</div><div class="dashboard-row"><div class="dashboard-summary"><div class="text-summary"><div class="title">สินค้า<br>รอการอนุมัติ</div><div class="counter">{{ DashboardCtrl.statistics.products_waiting_approve }}</div></div><span class="icon icon-icon_product_waiting"></span></div><div class="dashboard-summary"><div class="text-summary"><div class="title">หลักฐานการโอน<br>รอการตรวจสอบ</div><div class="counter">{{ DashboardCtrl.statistics.invoices_waiting_approve }}</div></div><span class="icon icon-icon_bill_checking"></span></div><div class="dashboard-summary"><div class="text-summary"><div class="title">รายการโอนเงิน<br>งวดปัจจุบัน</div><div class="counter">{{ DashboardCtrl.statistics.waiting_transfer_in_current_due }}</div></div><span class="icon icon-icon_transfer_menu"></span></div></div><div class="dashboard-title">ข้อมูลการเงิน</div><div class="dashboard-row"><div class="dashboard-summary"><div class="text-summary"><div class="title">รายรับทั้งหมด<br>งวดปัจจุบัน</div><div class="counter">{{ DashboardCtrl.statistics.income_in_current_due }} บาท</div></div><span class="icon icon-icon_transfer_menu"></span></div><div class="dashboard-summary"><div class="text-summary"><div class="title">กำไรทั้งหมด<br>งวดปัจจุบัน</div><div class="counter">{{ DashboardCtrl.statistics.profit_in_current_due }} บาท</div></div><span class="icon icon-icon_transfer_menu"></span></div></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/invoice/views/detail.view.html",'<div class="list-container" ng-if="InvoiceDetailCtrl.invoice.current_reject_reasons.length"><div class="list-item"><div class="title-text -sm"><div class="sub">เหตุผลที่ไม่พบการชำระเงิน</div><div class="title -th" ng-repeat="reason in InvoiceDetailCtrl.invoice.current_reject_reasons">- {{ reason.reason }}</div></div></div></div><div class="invoice-detail"><h2 class="title">ใบแจ้งหนี้หมายเลข {{ InvoiceDetailCtrl.invoice.invoice_id }}</h2><h4 class="title">สถานะ <strong ng-class="InvoiceDetailCtrl.getStatusClass()">{{ InvoiceDetailCtrl.invoice.buyer_pay_in_status }}</strong></h4><br><div class="row"><div class="invoice-detail-column"><div class="invoice-detail-content"><h4 class="title">ผู้ซื้อ</h4><buyer-row class="buyer-row single" buyer="InvoiceDetailCtrl.invoice.buyer"></buyer-row></div><div class="invoice-detail-content" ng-if="InvoiceDetailCtrl.isViewingSlipNeeded(InvoiceDetailCtrl.invoice)"><h4 class="title">หลักฐานการชำระเงิน</h4><img ng-src="{{ InvoiceDetailCtrl.invoice.current_pay_in_slip.image }}" class="center-block img-responsive"></div></div><div class="invoice-detail-column"><div class="invoice-detail-content"><h4 class="title">ใบสั่งของ</h4><div class="order-table"><div class="order-row header"><div class="id">เลขที่</div><div class="seller">ผู้ขาย</div><div class="cost">ยอดรวม(บาท)</div></div><a class="order-row hoverable" ng-repeat="order in InvoiceDetailCtrl.invoice.orders"><div class="id">{{ order.order_id }}</div><seller-row class="seller-row sm single" seller="order.seller"></seller-row><div class="cost">{{ order.total_cost | currency:"":2 }}</div></a><div class="order-row"><div class="id"></div><div class="text">ยอดรวม</div><div class="cost">{{ InvoiceDetailCtrl.invoice.total_cost_without_discount | currency:"":2 }}</div></div><div class="order-row"><div class="id"></div><div class="text">ส่วนลด</div><div class="cost">{{ InvoiceDetailCtrl.invoice.discount ? InvoiceDetailCtrl.invoice.discount : 0 | currency:"":2 }}</div></div><div class="order-row"><div class="id"></div><div class="text"><strong>ยอดสุทธิ</strong></div><div class="cost"><strong>{{ InvoiceDetailCtrl.invoice.total_cost | currency:"":2 }}</strong></div></div></div></div></div></div><div class="action-container full-width" ng-if="InvoiceDetailCtrl.$invoice.STATUS_WAITING === InvoiceDetailCtrl.invoice.buyer_pay_in_status"><button class="approve" ng-click="InvoiceDetailCtrl.$invoice.approve(InvoiceDetailCtrl.invoice.invoice_id)">พบการชำระเงิน</button><reject-button reasons="InvoiceDetailCtrl.rejectReasons" class="reject" title="ยืนยันการตรวจสอบการชำระเงิน" text="ไม่พบการชำระเงิน" on-submit="InvoiceDetailCtrl.onRejectSubmit(reasons)"></reject-button></div></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/invoice/views/index.view.html",'<div class="dashboard-row"><div class="dashboard-summary"><div class="text-summary"><div class="title">รอการตรวจสอบ</div><div class="counter">{{ InvoiceCtrl.statistics.waiting }}</div></div><span class="icon icon-icon_bill_dashboard"></span></div><div class="dashboard-summary"><div class="text-summary"><div class="title">ไม่ผ่านการตรวจสอบ</div><div class="counter">{{ InvoiceCtrl.statistics.rejected }}</div></div><span class="icon icon-icon_bill_no_paying"></span></div><div class="dashboard-summary"><div class="text-summary"><div class="title">ทั้งหมด</div><div class="counter">{{ InvoiceCtrl.statistics.all }}</div></div><span class="icon icon-icon_bill_total"></span></div></div><invoice-list class="invoice-list"></invoice-list>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/payment/views/index.view.html",'<div class="container-fluid"><div class="dashboard-row"><div class="dashboard-notification"><div class="icon-container -product"><i class="mdi mdi-cash"></i></div><div class="text-container"><div class="title -oneline">รอการตรวจสอบ</div><div class="counter">2</div></div></div><div class="dashboard-notification"><div class="icon-container -product-reject"><i class="mdi mdi-close-box"></i></div><div class="text-container"><div class="title -oneline">ไม่พบการชำระเงิน</div><div class="counter">9</div></div></div><div class="dashboard-notification"><div class="icon-container -product-all"><i class="mdi mdi-cash-multiple"></i></div><div class="text-container"><div class="title -oneline">ทั้งหมด</div><div class="counter">12</div></div></div></div><payment-list class="payment-list"></payment-list></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/point/views/index.view.html",'<div class="container-fluid"><div class="card-container" style="padding: 30px;"><h3 style="padding-left: 15px; font-family: \'Kanit\'; font-weight: 400;">ระบบคะแนน</h3><br><div class="col-md-3"><div class="input-group"><div class="label">คะแนน</div><input class="input" type="number" ng-model="PointIndexCtrl.point"></div></div><div class="col-md-3"><div class="input-group"><div class="label">แลกเงิน</div><input class="input" type="number" ng-model="PointIndexCtrl.money"></div></div><div class="col-md-3"><div class="input-group"><button ng-click="PointIndexCtrl.addPoint()" class="button button-primary" style="margin-top: 24px;">เพิ่มอัตราการแลกคะแนน</button></div></div><br><br><div class="clearfix"></div><table style="margin-top: 50px;" class="table table-hover"><thead><tr><th>คะแนน</th><th>แลกเงิน</th></tr></thead><tbody><tbody><tr ng-repeat="ratio in PointIndexCtrl.points"><td width="50%">{{ ratio.point }}</td><td width="50%">{{ ratio.money | currency:"":2 }} บาท</td></tr></tbody></tbody></table><div class="clearfix"></div></div></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/product/views/detail.view.html",'<div class="list-container" ng-if="ProductDetailCtrl.product.current_reject_reasons.length"><div class="list-item"><div class="title-text -sm"><div class="sub">เหตุผลที่ไม่พบการชำระเงิน</div><div class="title -th" ng-repeat="reason in ProductDetailCtrl.product.current_reject_reasons">- {{ reason.reason }}</div></div></div></div><div class="product-detail"><product-images-preview class="product-preview" images="ProductDetailCtrl.product.images"></product-images-preview><div class="product-description"><div class="description-group"><div class="label">สถานะ</div><div class="text">{{ ProductDetailCtrl.product.admin_approve_status }}</div></div><div class="description-group"><div class="label">ชื่อสินค้า</div><div class="text">{{ ProductDetailCtrl.product.name }}</div></div><div class="description-group"><div class="label">คำโปรย</div><p class="text">{{ ProductDetailCtrl.product.taglines }}</p></div><div class="description-group"><div class="label">การส่งสินค้า</div><p class="text">{{ ProductDetailCtrl.product.shipping_info.name }}</p></div><div class="description-group"><div class="label">ราคา</div><p class="text">{{ ProductDetailCtrl.product.price | currency:"":2 }} บาท</p></div><div class="description-group"><div class="label">รายละเอียด</div><p class="text">{{ ProductDetailCtrl.product.description }}</p></div><div class="description-group"><div class="label">คุณสมบัติ</div><p class="text" ng-repeat="property in ProductDetailCtrl.product.properties">- {{ property }}</p></div><div class="description-group"><div class="label">ปริมาณการใช้งาน</div><p class="text" ng-repeat="dose in ProductDetailCtrl.product.dose">- {{ dose }}</p></div><div class="description-group"><div class="label">ถาม - ตอบ</div><div class="faq-item" ng-repeat="faq in ProductDetailCtrl.product.faq"><p class="question">ถาม: {{faq.q}}</p><p class="answer">ตอบ: {{faq.a}}</p></div></div><div class="action-container" ng-if="ProductDetailCtrl.product.admin_approve_status === ProductDetailCtrl.$product.STATUS_WAITING"><reject-button reasons="ProductDetailCtrl.rejectReasons" class="reject" title="ยืนยันการไม่อนุมัติให้ขายสินค้า" text="ไม่อนุมัติ" on-submit="ProductDetailCtrl.onRejectSubmit(reasons)"></reject-button><button class="approve" ng-click="ProductDetailCtrl.approve()"><i class="mdi mdi-check"></i> <span class="text">อนุมัติ</span></button></div></div></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/product/views/index.view.html",'<div class="dashboard-row"><div class="dashboard-summary"><div class="text-summary"><div class="title">รอการอนุมัติ</div><div class="counter">{{ ProductCtrl.statistics.waiting }}</div></div><span class="icon icon-icon_product_waiting"></span></div><div class="dashboard-summary"><div class="text-summary"><div class="title">ไม่อนุมัติ</div><div class="counter">{{ ProductCtrl.statistics.rejected }}</div></div><span class="icon icon-icon_product_not_approve"></span></div><div class="dashboard-summary"><div class="text-summary"><div class="title">ทั้งหมด</div><div class="counter">{{ ProductCtrl.statistics.all }}</div></div><span class="icon icon-icon_product_total"></span></div></div><product-list title="{{ ProductCtrl.title }}" products="ProductCtrl.products" page="ProductCtrl.page" item-per-page="ProductCtrl.itemPerPage" on-change-page="ProductCtrl.onChangePage(page)"></product-list>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/seller/views/index.view.html",'<div class="container-fluid"><div class="dashboard-row"><div class="dashboard-notification"><div class="icon-container -product-all"><i class="mdi mdi-shopping"></i></div><div class="text-container"><div class="title -oneline">ผู้ขายทั้งหมด</div><div class="counter">32</div></div></div></div><div class="table"><seller-list title="ผู้ขายทั้งหมด"></seller-list></div></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/setting/views/layout.view.html",'<div class="setting-container"><div class="menu-list"><a class="item" ui-sref="core.setting.reject-product-reason" ui-sref-active="active">เหตุผลที่ไม่อนุมัติสินค้า</a> <a class="item" ui-sref="core.setting.reject-invoice-reason" ui-sref-active="active">เหตุผลที่ไม่พบการชำระเงิน</a></div><div class="content-container" ui-view=""></div></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/setting/views/reject-product-reason.view.html",'<div class="add-reason-container"><div class="label">เพิ่มเหตุผล</div><input class="input" type="text" ng-model="RejectReasonCtrl.reason" ng-keyup="RejectReasonCtrl.onCreateReasonInputKeyup($event)"> <button type="button" class="btn btn-primary" ng-click="RejectReasonCtrl.onClickCreateReason()">เพิ่ม</button></div><table class="table table-hover"><thead><tr><th>เหตุผล</th><th></th></tr></thead><tbody><tr ng-repeat="reason in RejectReasonCtrl.rejectReasons.data"><td ng-if="reason.edited"><input class="input" type="text" ng-model="reason.reason" ng-keyup="RejectReasonCtrl.onEditReasonInputKeyup($event, reason)"></td><td ng-if="!reason.edited">{{ reason.reason }}</td><td ng-if="reason.edited" class="text-right"><button type="button" class="btn btn-primary" ng-click="RejectReasonCtrl.submitEdit(reason)">ยืนยัน</button> <button type="button" class="btn btn-default" ng-click="RejectReasonCtrl.cancelEdit(reason)">ยกเลิก</button></td><td ng-if="!reason.edited" class="text-right"><button type="button" class="btn btn-default" ng-click="RejectReasonCtrl.startEdit(reason)">แก้ไข</button> <button type="button" class="btn btn-default" ng-click="RejectReasonCtrl.removeEdit(reason)">ลบ</button></td></tr></tbody></table>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/transfer/views/detail.view.html",'<div class="transfer-detail"><div class="row"><div class="transfer-detail-column"><div class="transfer-detail-content"><h4 class="title">ผู้ขาย</h4><seller-row class="seller-row single" seller="TransferDetailCtrl.transfer.seller"></seller-row></div></div><div class="transfer-detail-column"><div class="transfer-detail-content"><h4 class="title">ใบสั่งของ</h4><div class="order-table"><div class="order-row header"><div class="id">เลขที่</div><div class="seller">ผู้ซื้อ</div><div class="cost">ยอดรวม(บาท)</div></div><div class="order-row" ng-repeat="order in TransferDetailCtrl.transfer.data"><div class="id">{{ order.order_id }}</div><buyer-row class="buyer-row sm single" buyer="order.buyer"></buyer-row><div class="cost">{{ order.total_cost | currency:"":2 }}</div></div><div class="order-row"><div class="id"></div><div class="text"><strong>ยอดสุทธิ</strong></div><div class="cost"><strong>{{ TransferDetailCtrl.transfer.total_cost | currency:"":2 }}</strong></div></div></div></div></div></div><div class="action-container full-width"><button class="approve" ng-click="TransferDetailCtrl.onClick()">โอนเงินเรียบร้อย</button> <button class="reject">พิมพ์ใบโอนเงิน</button></div></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/transfer/views/index.view.html",'<transfer-list class="transfer-list"></transfer-list>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/core/directives/navbar/navbar.view.html",'<nav class="navbar-container"><button class="button" ng-click="NavbarCtrl.toggleSidebar()"><i class="mdi mdi-menu"></i>MENU</button> <a ui-sref="dashboard.index" class="brand">CARELOT</a><div class="link-group"><a href="#" class="link">ออกจากระบบ</a></div></nav>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/core/directives/spinner/spinner.view.html",'<div id="carelot-spinner" class="spinner-container"><div class="loader">...</div></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/core/directives/sidebar/sidebar.view.html",'<div class="sidebar-container" id="sidebar-container"><a ng-repeat="menu in SidebarCtrl.menus" ui-sref="{{ menu.state }}" menu="" class="sidebar-menu"><span class="icon" ng-class="menu.icon"></span> <span class="text">{{ menu.text }}</span></a></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/product/directives/product-images-preview/product-images-preview.view.html",'<img id="preview" class="preview" ng-src="{{ ProductImagesPreviewCtrl.currentImage }}"><div class="image-list"><button class="item" ng-click="ProductImagesPreviewCtrl.changePreviewImage($index)" ng-repeat="image in ProductImagesPreviewCtrl.images track by $index"><img ng-src="{{ image }}" alt=""></button></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/buyer/components/buyer-list/buyer-list.view.html",'<div class="buyer-table"><div class="buyer-table-header"><div class="title">{{ $ctrl.title }}</div><div class="search-box"><input ng-model="$ctrl.query" class="input" type="text" placeholder="ค้นหาผู้ซื้อ"> <i class="mdi mdi-magnify"></i></div><div class="counter">แสดงผล 1 - 3 จาก 3</div></div><buyer-table buyers="$ctrl.buyers" query="$ctrl.query"></buyer-table></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/buyer/components/buyer-row/buyer-row.view.html",'<a ui-sref="core.buyer.detail( { id: $ctrl.buyer.seller_id } )" class="thumbnail"><img ng-src="{{ $ctrl.buyer.thumbnail }}" class="img-responsive"></a> <a ui-sref="core.buyer.detail( { id: $ctrl.buyer.seller_id } )" class="name">{{ $ctrl.buyer.name }}</a>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/buyer/components/buyer-table/buyer-table.view.html",'<div class="buyer-row header"><div class="thumbnail"></div><div class="name">ชื่อผู้ซื้อ<i class="mdi mdi-menu-down"></i></div></div><buyer-row class="buyer-row" ng-repeat="buyer in $ctrl.buyers | limitTo:10 track by $index" buyer="buyer"></buyer-row>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/core/components/pagination/pagination.view.html",'<ul class="pagination"></ul>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/invoice/components/invoice-list/invoice-list.view.html",'<div class="invoice-list-header"><div class="title">ใบแจ้งหนี้</div></div><div class="invoice-list-header"><div class="search-container"><div class="search-box"><input ng-keyup="$ctrl.onSubmit($event)" ng-model="$ctrl.query.text" class="input" type="text" placeholder="ค้นหาใบแจ้งหนี้"> <i class="mdi mdi-magnify"></i></div><div class="filter-list"><div class="label">สถานะใบแจ้งหนี้</div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.buyer_pay_in_status.waiting" type="checkbox" id="filter1"> <label class="checkbox" for="filter1">{{ $ctrl.$invoice.STATUS_WAITING }}</label></div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.buyer_pay_in_status.rejected" type="checkbox" id="filter2"> <label class="checkbox" for="filter2">{{ $ctrl.$invoice.STATUS_REJECTED }}</label></div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.buyer_pay_in_status.approved" type="checkbox" id="filter3"> <label class="checkbox" for="filter3">{{ $ctrl.$invoice.STATUS_APPROVED }}</label></div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.buyer_pay_in_status.not_pay" type="checkbox" id="filter4"> <label class="checkbox" for="filter4">{{ $ctrl.$invoice.STATUS_NO_PAYMENT }}</label></div></div></div><div class="counter">แสดงผล {{ $ctrl.firstItemPosition }} - {{ $ctrl.lastItemPosition }} จากทั้งหมด {{ $ctrl.invoices.count }}</div></div><invoice-table ng-style="$ctrl.tableOpacity" invoices="$ctrl.invoices.data" class="invoice-table"></invoice-table><div class="notfound" ng-if="!$ctrl.invoices.count"><h1 class="text-center" style="padding: 50px;">ไม่พบใบแจ้งหนี้</h1></div><uib-pagination ng-if="$ctrl.invoices.count" total-items="$ctrl.invoices.count" ng-model="$ctrl.query.page" ng-change="$ctrl.fetchData(true)" max-size="5" boundary-link-numbers="true" items-per-page="$ctrl.query.limit" previous-text="หน้าที่แล้ว" next-text="หน้าต่อไป"></uib-pagination>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/invoice/components/invoice-row/invoice-row.view.html",'<span class="label">หมายเลข</span><div class="id">{{ $ctrl.invoice.invoice_id }}<div class="feedback" ng-if="$ctrl.invoice.isEdited">แก้ไข</div></div><span class="label">ผู้ซื้อ</span><div class="buyer-row"><div class="thumbnail"><img ng-src="{{ $ctrl.invoice.buyer.avatar }}"></div><div class="name">{{ $ctrl.invoice.buyer.name }}</div></div><span class="label">จำนวนใบสั่งซื้อ</span><div class="orders">{{ $ctrl.invoice.orders_size }}</div><span class="label">จำนวนเงิน (บาท)</span><div class="cost">{{ $ctrl.invoice.total_cost | currency:"":2 }}</div><div class="label">สถานะ</div><div class="status" ng-class="$ctrl.convertStatusToClass($ctrl.invoice.buyer_pay_in_status)">{{ $ctrl.invoice.buyer_pay_in_status }}</div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/invoice/components/invoice-table/invoice-table.view.html",'<div class="invoice-row header"><div class="id">หมายเลข</div><div class="buyer-row">ผู้ซื้อ</div><div class="orders">จำนวนใบสั่งของ</div><div class="cost">จำนวนเงิน</div><div class="status">สถานะ</div></div><invoice-row class="invoice-row" ng-repeat="invoice in $ctrl.invoices track by $index" invoice="invoice" ui-sref="core.invoice.detail( { id: invoice.invoice_id })"></invoice-row>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/payment/components/payment-dashboard-list/payment-dashboard-list.view.html",'<div class="payment-list-header"><div class="title">การชำระเงินล่าสุด</div></div><payment-item ng-repeat="payment in $ctrl.payments" payment="payment" class="payment-item"></payment-item>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/payment/components/payment-item/payment-item.view.html",'<a href="#" class="thumbnail"><img src="http://placehold.it/480" class="img-responsive"></a><div class="buyer">ผู้ซื้อ</div><buyer-row class="buyer-row sm" buyer="$ctrl.payment.buyer"></buyer-row><div class="pay-amount"><div class="label">ใบแจ้งหนี้</div><a class="text" href="#">{{ $ctrl.payment.invoice_id }}</a></div><div class="pay-amount"><div class="label">จำนวนเงินที่ชำระ</div><div class="text">{{ $ctrl.payment.amount | currency:"":2 }} บาท</div></div><div class="action" ng-if="$ctrl.payment.status === $ctrl.$Payment.STATUS_WAITING"><button class="approve"><i class="mdi mdi-check"></i> <span class="text">พบการชำระเงินจริง</span></button><reject-button reasons="$ctrl.rejectReasons" class="reject" title="ยืนยันการตรวจสอบการชำระเงิน" text="ไม่พบการชำระเงิน"></reject-button></div><div class="action" ng-if="$ctrl.payment.status !== $ctrl.$Payment.STATUS_WAITING"><div class="text" ng-class="{ \'rejected\': $ctrl.payment.status === $ctrl.$Payment.STATUS_REJECTED, \'approved\': $ctrl.payment.status === $ctrl.$Payment.STATUS_APPROVED }">{{ $ctrl.payment.status }}</div></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/payment/components/payment-list/payment-list.view.html",'<div class="payment-list-header"><div class="title">การชำระเงิน</div></div><div class="payment-list-header"><div class="search-container"><div class="search-box"><input ng-keyup="$ctrl.onSubmit($event)" ng-model="$ctrl.query.text" class="input" type="text" placeholder="ค้นหาการชำระเงิน"> <i class="mdi mdi-magnify"></i></div><div class="filter-list"><div class="label">สถานะการชำระเงิน</div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.status.waiting" type="checkbox" id="filter1"> <label class="checkbox" for="filter1">รอการตรวจสอบ</label></div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.status.rejected" type="checkbox" id="filter2"> <label class="checkbox" for="filter2">ไม่พบการชำระเงิน</label></div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.status.approved" type="checkbox" id="filter3"> <label class="checkbox" for="filter3">พบการชำระเงิน</label></div></div></div><div class="counter">แสดงผล {{ $ctrl.firstItemPosition }} - {{ $ctrl.lastItemPosition }} จากทั้งหมด {{ $ctrl.payments.count }}</div></div><payment-item ng-repeat="payment in $ctrl.payments.payments" payment="payment" class="payment-item"></payment-item><div class="clearfix"></div><uib-pagination ng-if="$ctrl.payments.count" total-items="$ctrl.payments.count" ng-model="$ctrl.currentPage" ng-change="$ctrl.fetchData(true)" max-size="5" boundary-link-numbers="true" items-per-page="$ctrl.itemPerPage" previous-text="หน้าที่แล้ว" next-text="หน้าต่อไป"></uib-pagination>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/product/components/product-list/product-list.view.html",'<div class="product-list"><div class="product-list-header"><div class="title">{{ $ctrl.title }}</div></div><div class="product-list-header"><div class="search-container"><div class="search-box"><input ng-keyup="$ctrl.onSubmit($event)" ng-model="$ctrl.query.text" class="input" type="text" placeholder="ค้นหาสินค้าจาก ชื่อสินค้า ชื่อผู้ขาย"> <i class="mdi mdi-magnify"></i></div><div class="filter-list"><div class="label">สถานะสินค้า</div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.status.waiting" type="checkbox" id="filter1"> <label class="checkbox" for="filter1">รอการอนุมัติ</label></div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.status.rejected" type="checkbox" id="filter2"> <label class="checkbox" for="filter2">ไม่ผ่านการอนุมัติ</label></div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.status.approved" type="checkbox" id="filter3"> <label class="checkbox" for="filter3">ผ่านการอนุมัติ</label></div></div></div><div class="counter">แสดงผล {{ $ctrl.firstItemPosition }} - {{ $ctrl.lastItemPosition }} จากทั้งหมด {{ $ctrl.products.count }}</div></div><div class="notfound" ng-if="!$ctrl.products.count"><h1 class="text-center" style="padding: 50px;">ไม่พบสินค้า</h1></div><product-table ng-if="$ctrl.products.count" ng-style="$ctrl.tableOpacity" products="$ctrl.products.data"></product-table><uib-pagination ng-if="$ctrl.products.count" total-items="$ctrl.products.count" ng-model="$ctrl.query.page" ng-change="$ctrl.fetchData(true)" max-size="5" boundary-link-numbers="true" previous-text="หน้าที่แล้ว" next-text="หน้าต่อไป"></uib-pagination></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/product/components/product-row/product-row.view.html",'<div class="product-row" ng-class="{ \'rejected\': $ctrl.product.admin_approve_status === $ctrl.$Product.STATUS_REJECTED, \'approved\': $ctrl.product.admin_approve_status === $ctrl.$Product.STATUS_APPROVED }"><a ui-sref="core.product.detail( { id: $ctrl.product.product_id } )" class="thumbnail"><img ng-src="{{ $ctrl.product.thumbnail }}" class="img-responsive"></a> <a ui-sref="core.product.detail( { id: $ctrl.product.product_id } )" class="name"><label class="label">ชื่อสินค้า</label><div class="feedback" ng-if="$ctrl.product.isEdited">แก้ไข</div>{{ $ctrl.product.name }}</a><div class="price"><label class="label">ราคา(บาท)</label> {{ $ctrl.product.price | currency:"":2 }}</div><div class="seller"><label class="label">ผู้ขาย</label> {{ $ctrl.product.seller.name }}</div></div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/product/components/product-table/product-table.view.html",'<div class="product-row header"><div class="thumbnail"></div><div class="name">ชื่อสินค้า<i class="mdi mdi-menu-down"></i></div><div class="price"><span class="text">ราคา (บาท)</span><i class="mdi mdi-menu-down"></i></div><div class="seller">ผู้ขาย<i class="mdi mdi-menu-down"></i></div></div><product-row ng-repeat="product in $ctrl.products | limitTo:10 | filter:$ctrl.query" product="product"></product-row>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/seller/components/seller-list/seller-list.view.html",'<div class="seller-table"><div class="seller-table-header"><div class="title">{{ $ctrl.title }}</div><div class="search-box"><input ng-model="$ctrl.query" class="input" type="text" placeholder="ค้นหาผู้ขาย"> <i class="mdi mdi-magnify"></i></div><div class="counter">แสดงผล 1 - 3 จาก 3</div></div><seller-table sellers="$ctrl.sellers" query="$ctrl.query"></seller-table></div>');
}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/seller/components/seller-row/seller-row.view.html",'<a ui-sref="core.seller.detail( { id: $ctrl.seller.seller_id } )" class="thumbnail"><img ng-src="{{ $ctrl.seller.avatar }}" class="img-responsive"></a> <a ui-sref="core.seller.detail( { id: $ctrl.seller.seller_id } )" class="name">{{ $ctrl.seller.name }}</a>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/seller/components/seller-table/seller-table.view.html",'<div class="seller-row header"><div class="thumbnail"></div><div class="name">ชื่อผู้ขาย<i class="mdi mdi-menu-down"></i></div></div><seller-row ng-repeat="seller in $ctrl.sellers | limitTo:10 track by $index" seller="seller"></seller-row>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/transfer/components/transfer-list/transfer-list.view.html",'<div class="transfer-list-header"><div class="title">รายการที่ต้องโอนทั้งหมด</div></div><div class="transfer-list-header"><div class="search-container"><div class="filter-list"><div class="label">งวดโอนเงิน</div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.due.current_due" type="checkbox" id="filter1"> <label class="checkbox" for="filter1">งวดปัจจุบัน</label></div><div class="filter"><input ng-change="$ctrl.onQueryChange()" ng-model="$ctrl.query.due.next_due" type="checkbox" id="filter2"> <label class="checkbox" for="filter2">งวดถัดไป</label></div></div></div><div class="counter">แสดงผล {{ $ctrl.firstItemPosition }} - {{ $ctrl.lastItemPosition }} จากทั้งหมด {{ $ctrl.transfers.count }}</div></div><transfer-table ng-style="$ctrl.tableOpacity" transfers="$ctrl.transfers.data" class="transfer-table"></transfer-table><div class="notfound" ng-if="!$ctrl.transfers.count"><h1 class="text-center" style="padding: 50px;">ไม่พบรายการที่ต้องโอน</h1></div><uib-pagination ng-if="$ctrl.transfers.count" total-items="$ctrl.transfers.count" ng-model="$ctrl.query.page" ng-change="$ctrl.fetchData(true)" max-size="5" boundary-link-numbers="true" items-per-page="$ctrl.query.limit" previous-text="หน้าที่แล้ว" next-text="หน้าต่อไป"></uib-pagination>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/transfer/components/transfer-row/transfer-row.view.html",'<span class="label">ผู้ขาย</span><seller-row class="seller-row sm single" seller="$ctrl.transfer.seller"></seller-row><div class="label">จำนวนใบสั่งซื้อ</div><div class="orders">{{ $ctrl.transfer.orders_size }}</div><span class="label">จำนวนเงิน (บาท)</span><div class="cost">{{ $ctrl.transfer.total_cost | currency:"":2 }}</div>')}])}(),function(t){try{t=angular.module("carelot")}catch(e){t=angular.module("carelot",[])}t.run(["$templateCache",function(t){t.put("app/transfer/components/transfer-table/transfer-table.view.html",'<div class="transfer-row header"><div class="seller">ผู้ขาย</div><div class="orders">จำนวนใบสั่งของ</div><div class="cost">จำนวนเงิน</div></div><transfer-row class="transfer-row" ng-repeat="transfer in $ctrl.transfers track by $index" transfer="transfer" ui-sref="core.transfer.detail( { seller_id: transfer.seller.seller_id })"></transfer-row>')}])}();