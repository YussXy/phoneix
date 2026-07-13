const CONFIG = {
    storeName: "Yanacth",
    ownerName: "Yanzz",
    avatar: "image/logo/logo.jpg",
    instagram: "",
    telegram: "",
    whatsappNumber: "6281313634010",
    whatsappNumber: "6281313634010",
    adminNumber: "6289530495603"
};

const banners = [
    "image/banner/banner1.jpg",
    "image/banner/banner2.jpg",
    "image/banner/banner3.jpg"
];



const products = [
    {
        id: 1,
        name: "APK PREM",
        price: "Lihat Daftar",
        image: "image/produk/produk1.jpg",
        desc: "Pilih Aplikasi Premium",
        productList: [
            { name: "AM", price: 3000 },
            { name: "VIU", price: 5000 },
            { name: "YOUTUBE", price: 4500 },
            { name: "CANVA", price: 3000 }
        ]
    },
    {
        id: 2,
        name: "SUNTIK TIKTOK",
        price: "Pilih Layanan",
        image: "image/produk/produk2.jpg",
        desc: "Pilih Layanan & Atur Jumlah",
        isSosmed: true,
        platform: "TikTok",
        services: [
            { name: "FOLLOWERS", pricePerUnit: 45000, minOrder: 50, unit: 1000 },
            { name: "LIKES", pricePerUnit: 18000, minOrder: 100, unit: 1000 },
            { name: "VIEWS", pricePerUnit: 15000, minOrder: 100, unit: 1000 }
        ]
    },
    {
        id: 3,
        name: "SUNTIK IG",
        price: "Pilih Layanan",
        image: "image/produk/produk2.jpg",
        desc: "Pilih Layanan & Atur Jumlah",
        isSosmed: true,
        platform: "Instagram",
        services: [
            { name: "FOLLOWERS", pricePerUnit: 45000, minOrder: 50, unit: 1000 },
            { name: "LIKES", pricePerUnit: 18000, minOrder: 100, unit: 1000 },
            { name: "VIEWS", pricePerUnit: 15000, minOrder: 100, unit: 1000 }
        ]
    },
    {
        id: 4,
        name: "SUNTIK WA",
        price: "Pilih Layanan",
        image: "image/produk/produk2.jpg",
        desc: "Pilih Layanan & Atur Jumlah",
        isSosmed: true,
        platform: "WhatsApp",
        services: [
            { name: "FOLLOWERS", pricePerUnit: 38000, minOrder: 50, unit: 1000 }
        ]
    },
    {
        id: 5,
        name: "Nokos Indonesia",
        price: 6000,
        image: "image/produk/produk3.jpg",
        desc: "Nomor Kosong"
    },
    {
        id: 6,
        name: "SEWA BOT WA",
        price: "Pilih Durasi",
        image: "image/produk/produk4.jpg",
        desc: "Pilih Durasi Sewa Bot WhatsApp",
        isBotWa: true,
        services: [
            { name: "1 MINGGU", price: 4500, type: "sewa" },
            { name: "2 MINGGU", price: 9000, type: "sewa" },
            { name: "1 BULAN", price: 12000, type: "sewa" },
            { name: "PERMANEN", price: 15000, type: "sewa" },
            { name: "JADI BOT", price: 25000, type: "jadi" }
        ]
    },
    {
        id: 7,
        name: "GAG 2 - SEEDS",
        price: "Pilih Item",
        image: "image/produk/produk5.jpg",
        desc: "Pilih Seeds & Atur Jumlah",
        isRoblox: true,
        platform: "GAG 2 - SEEDS",
        needUsername: true,
        services: [
            { name: "Rainbow", pricePerUnit: 95, minOrder: 20, unit: 1 },
            { name: "Gold", pricePerUnit: 35, minOrder: 50, unit: 1 },
            { name: "Bamboo", pricePerUnit: 5, minOrder: 300, unit: 1 },
            { name: "Carrot", pricePerUnit: 5, minOrder: 500, unit: 1 },
            { name: "Ghost Paper", pricePerUnit: 800, minOrder: 2, unit: 1 },
            { name: "Dragon's Breath", pricePerUnit: 3500, minOrder: 1, unit: 1 },
            { name: "Moon Bloom", pricePerUnit: 900, minOrder: 3, unit: 1 },
            { name: "Cherry", pricePerUnit: 500, minOrder: 3, unit: 1 },
            { name: "Pomegranate", pricePerUnit: 400, minOrder: 5, unit: 1 },
            { name: "Poison Apple", pricePerUnit: 500, minOrder: 4, unit: 1 },
            { name: "Venom", pricePerUnit: 450, minOrder: 5, unit: 1 },
            { name: "Hypno Bloom", pricePerUnit: 900, minOrder: 3, unit: 1 },
            { name: "Mega", pricePerUnit: 250, minOrder: 6, unit: 1 },
            { name: "Roket Pop", pricePerUnit: 350, minOrder: 5, unit: 1 },
            { name: "Fire Fern", pricePerUnit: 350, minOrder: 5, unit: 1 }
        ]
    },
    {
        id: 8,
        name: "GAG 2 - GEARS",
        price: "Pilih Item",
        image: "image/produk/produk5.jpg",
        desc: "Pilih Gears & Atur Jumlah",
        isRoblox: true,
        platform: "GAG 2 - GEARS",
        needUsername: true,
        services: [
            { name: "Super Sprinkler", pricePerUnit: 95, minOrder: 20, unit: 1 },
            { name: "Super Watering Can", pricePerUnit: 95, minOrder: 20, unit: 1 },
            { name: "Legendary Sprinkler", pricePerUnit: 55, minOrder: 20, unit: 1 }
        ]
    },
    {
        id: 9,
        name: "GAG 2 - PETS",
        price: "Pilih Item",
        image: "image/produk/produk5.jpg",
        desc: "Pilih Pets & Atur Jumlah",
        isRoblox: true,
        platform: "GAG 2 - PETS",
        needUsername: true,
        services: [
            { name: "Frog", pricePerUnit: 200, minOrder: 5, unit: 1 },
            { name: "Bunny", pricePerUnit: 200, minOrder: 5, unit: 1 },
            { name: "Deer", pricePerUnit: 200, minOrder: 5, unit: 1 },
            { name: "Owl", pricePerUnit: 200, minOrder: 5, unit: 1 },
            { name: "Robin", pricePerUnit: 250, minOrder: 5, unit: 1 },
            { name: "Bee", pricePerUnit: 400, minOrder: 5, unit: 1 },
            { name: "Dragon Fly", pricePerUnit: 800, minOrder: 3, unit: 1 },
            { name: "Unicorn", pricePerUnit: 800, minOrder: 3, unit: 1 },
            { name: "Turtle", pricePerUnit: 2000, minOrder: 1, unit: 1 },
            { name: "Bear", pricePerUnit: 2500, minOrder: 1, unit: 1 },
            { name: "Monkey", pricePerUnit: 4000, minOrder: 1, unit: 1 },
            { name: "Raccoon", pricePerUnit: 25000, minOrder: 1, unit: 1 }
        ]
    },
    {
        id: 10,
        name: "PAKETAN GAG 2",
        price: "Pilih Paket",
        image: "image/produk/produk5.jpg",
        desc: "Pilih Paketan Hemat",
        isPaketan: true,
        platform: "PAKETAN GAG 2",
        needUsername: true,
        services: [
            { name: "PAKETAN 1 - SEED BAGUS", price: 17000, minOrder: 1, unit: 1, detail: "Ghost Paper x3, Dragon Breath x2, Hypno Bloom x2, Moon Bloom x2" },
            { name: "PAKETAN 2 - PET BAGUS", price: 12000, minOrder: 1, unit: 1, detail: "Monkey x1, Dragon Fly x3, Unicorn x3, Bear x2" },
            { name: "PAKETAN 3 - GEAR BAGUS", price: 8000, minOrder: 1, unit: 1, detail: "Super Watering Can x11, Super Sprinkler x11, Legendary Sprinkler x11" },
            { name: "PAKETAN 4 - COMBO TERBAIK", price: 60000, minOrder: 1, unit: 1, detail: "Moon Bloom x4, Hypno Bloom x3, Ghost Paper x4, Dragon Breath x3, Dragon Fly x4, Unicorn x3, Bear x4, Raccoon x1, + Uang 1B" }
        ]
    },
    {
        id: 11,
        name: "DRAG DRIFT - GAMEPASS",
        price: "Pilih Item",
        image: "image/produk/produk8.jpg",
        desc: "Pilih Gamepass Drag Drift",
        isRoblox: true,
        platform: "DRAG DRIFT - GAMEPASS",
        needUsername: true,
        services: [
            { name: "Custom Plate Pass", pricePerUnit: 15000, minOrder: 1, unit: 1 },
            { name: "2x Paycheck", pricePerUnit: 75000, minOrder: 1, unit: 1 },
            { name: "Advanced Paint Pass", pricePerUnit: 13000, minOrder: 1, unit: 1 },
            { name: "Dragspec Pass", pricePerUnit: 18000, minOrder: 1, unit: 1 },
            { name: "Luxury Pass", pricePerUnit: 23000, minOrder: 1, unit: 1 },
            { name: "Polisi Pass", pricePerUnit: 25000, minOrder: 1, unit: 1 },
            { name: "Boombox Radio", pricePerUnit: 9000, minOrder: 1, unit: 1 },
            { name: "Suspension Pro Pass", pricePerUnit: 9000, minOrder: 1, unit: 1 },
            { name: "Exclusive Rims Pass", pricePerUnit: 15000, minOrder: 1, unit: 1 },
            { name: "Sloy Expansion Pass", pricePerUnit: 19000, minOrder: 1, unit: 1 },
            { name: "Premium Accessories Pass", pricePerUnit: 15000, minOrder: 1, unit: 1 },
            { name: "Slot Limit Unlock Pass", pricePerUnit: 19000, minOrder: 1, unit: 1 }
        ]
    },
    {
        id: 12,
        name: "DRAG DRIFT - UANG",
        price: "Pilih Jumlah",
        image: "image/produk/produk8.jpg",
        desc: "Pilih Jumlah Uang Drag Drift",
        isRoblox: true,
        platform: "DRAG DRIFT - UANG",
        needUsername: true,
        services: [
            { name: "1 JT", pricePerUnit: 6000, minOrder: 1, unit: 1 },
            { name: "5 JT", pricePerUnit: 9000, minOrder: 1, unit: 1 },
            { name: "10 JT", pricePerUnit: 10000, minOrder: 1, unit: 1 },
            { name: "50 JT", pricePerUnit: 13000, minOrder: 1, unit: 1 },
            { name: "100 JT", pricePerUnit: 20000, minOrder: 1, unit: 1 },
            { name: "500 JT", pricePerUnit: 49000, minOrder: 1, unit: 1 }
        ]
    },
    
    
    {
    id: 13,
    name: "FISH IT - GAMEPASS",
    price: "Pilih Item",
    image: "image/produk/produk7.jpg",
    desc: "Pilih Gamepass Fish It",
    isRoblox: true,
    platform: "FISH IT - GAMEPASS",
    needUsername: true,
    services: [
        { name: "Mutations", pricePerUnit: 35000, minOrder: 1, unit: 1 },
        { name: "Advanced Luck", pricePerUnit: 59000, minOrder: 1, unit: 1 },
        { name: "Extra Luck", pricePerUnit: 32000, minOrder: 1, unit: 1 },
        { name: "Small Luck", pricePerUnit: 10000, minOrder: 1, unit: 1 },
        { name: "Double EXP", pricePerUnit: 25000, minOrder: 1, unit: 1 },
        { name: "VIP", pricePerUnit: 50000, minOrder: 1, unit: 1 },
        { name: "Sell Anywhere", pricePerUnit: 37000, minOrder: 1, unit: 1 },
        { name: "Ability Spin", pricePerUnit: 6500, minOrder: 1, unit: 1 },
        { name: "Arctic Egg", pricePerUnit: 20000, minOrder: 1, unit: 1 },
        { name: "More Drops", pricePerUnit: 20000, minOrder: 1, unit: 1 },
        { name: "Fast Roll", pricePerUnit: 40000, minOrder: 1, unit: 1 },
        { name: "Luck Rolls", pricePerUnit: 13000, minOrder: 1, unit: 1 },
        { name: "Auto Collect", pricePerUnit: 20000, minOrder: 1, unit: 1 }
    ]
},
    
    
    
    
    
    
    {
        id: 14,
        name: "SLIME RNG - GAMEPASS",
        price: "Pilih Item",
        image: "image/produk/produk6.jpg",
        desc: "Pilih Gamepass Slime RNG",
        isRoblox: true,
        platform: "SLIME RNG - GAMEPASS",
        needUsername: true,
        services: [
            { name: "+1 Equip", pricePerUnit: 15000, minOrder: 1, unit: 1 },
            { name: "Double Roll", pricePerUnit: 50000, minOrder: 1, unit: 1 },
            { name: "More Drops", pricePerUnit: 15000, minOrder: 1, unit: 1 },
            { name: "VIP", pricePerUnit: 30000, minOrder: 1, unit: 1 },
            { name: "Fast Roll", pricePerUnit: 30000, minOrder: 1, unit: 1 },
            { name: "Luck Roll", pricePerUnit: 8000, minOrder: 1, unit: 1 },
            { name: "Auto Collect", pricePerUnit: 20000, minOrder: 1, unit: 1 }
        ]
    }
];








let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let currentProduct = null;
let bannerInterval = null;

function playSound() {
    const audio = document.getElementById("clickSound");
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    }
}

function addRipple(e, element) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";
    element.style.position = "relative";
    element.style.overflow = "hidden";
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
}

document.addEventListener("click", function(e) {
    const target = e.target.closest(".product-card, .feature-item, .social-icon, .btn-buy, .btn-cart, .menu-btn, .cart-badge, .menu-item, .modal-close, .btn-confirm");
    if (target && !target.closest(".modal-overlay")) {
        playSound();
        addRipple(e, target);
    }
});

function updateCartCount() {
    document.getElementById("cartCount").innerText = cart.reduce((sum, i) => sum + i.qty, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function showToast(message) {
    let toast = document.querySelector(".toast-notification");
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast-notification";
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

function addToCart(product) {
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartCount();
    showToast(`${product.name} +1`);
}



function initBanner() {
    const container = document.getElementById("bannerSlider");
    if (!container) return;
    container.innerHTML = "";
    banners.forEach((src, idx) => {
        const slide = document.createElement("div");
        slide.className = "banner-slide";
        if (idx === 0) slide.classList.add("active");
        slide.innerHTML = `<img src="${src}" alt="banner" onerror="this.src='image/logo/logo.jpg'">`;
        container.appendChild(slide);
    });
    const dotsDiv = document.createElement("div");
    dotsDiv.className = "banner-dots";
    banners.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.className = "banner-dot";
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => showBannerSlide(i));
        dotsDiv.appendChild(dot);
    });
    container.appendChild(dotsDiv);
    let current = 0;
    if (bannerInterval) clearInterval(bannerInterval);
    bannerInterval = setInterval(() => {
        current = (current + 1) % banners.length;
        showBannerSlide(current);
    }, 5000);
}

function showBannerSlide(index) {
    const slides = document.querySelectorAll(".banner-slide");
    const dots = document.querySelectorAll(".banner-dot");
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
}



function showProductDetail(product) {
    currentProduct = product;
    const modal = document.getElementById("productDetailModal");
    const content = document.getElementById("detailContent");
    
    let priceDisplay = product.price;
    if (typeof product.price === 'number') {
        priceDisplay = 'Rp ' + product.price.toLocaleString('id-ID');
    }
    
    let actionButtons = '';
    if (product.isSosmed || product.isRoblox || product.isPaketan || product.isBotWa) {
        actionButtons = `
            <div class="product-actions" style="margin-top:16px;">
                <button class="btn-buy" style="flex:1;" id="detailBuyBtn">Beli Sekarang</button>
            </div>
        `;
    } else {
        actionButtons = `
            <div class="product-actions" style="margin-top:16px;">
                <button class="btn-buy" style="flex:1;" id="detailBuyBtn">Beli Sekarang</button>
                <button class="btn-cart" style="flex:1;" id="detailCartBtn"><i class="ri-add-line"></i> Keranjang</button>
            </div>
        `;
    }
    
    content.innerHTML = `
        <img src="${product.image}" class="detail-image" onerror="this.src='image/logo/logo.jpg'">
        <div class="detail-title">${product.name}</div>
        <div class="detail-price">${priceDisplay}</div>
        <div class="detail-desc">${product.desc}</div>
        ${actionButtons}
    `;
    modal.classList.add("open");
    document.getElementById("modalOverlay").classList.add("active");
    
    document.getElementById("detailBuyBtn").onclick = () => { 
        showPayment(product); 
        closeDetail(); 
    };
    
    const cartBtn = document.getElementById("detailCartBtn");
    if (cartBtn) {
        cartBtn.onclick = () => { 
            addToCart(product); 
            closeDetail(); 
        };
    }
}




function closeDetail() {
    document.getElementById("productDetailModal").classList.remove("open");
    document.getElementById("modalOverlay").classList.remove("active");
}



function showPayment(product) {
    currentProduct = product;
    const modal = document.getElementById("paymentModal");
    const content = document.getElementById("paymentContent");
    
    if (product.isBotWa) {
        let servicesHtml = product.services.map((service, index) => `
            <div class="service-option" data-index="${index}" style="display:flex; justify-content:space-between; padding:14px 18px; background:#1a1d24; border-radius:14px; margin-bottom:10px; cursor:pointer; border:2px solid transparent; transition:all 0.2s;" onclick="selectBotService(${index})">
                <span style="font-weight:700; font-size:15px;">${service.name}</span>
                <span style="color:#22d3ee; font-weight:700;">Rp ${service.price.toLocaleString('id-ID')}</span>
            </div>
        `).join('');
        
        content.innerHTML = `
            <div style="text-align:center; padding: 0 10px;">
                <div style="font-size:20px; font-weight:700; margin-top:5px;">${product.name}</div>
                <div style="font-size:13px; color:#8e95a5; margin-bottom:16px;">Pilih durasi atau layanan:</div>
                <div id="serviceList">
                    ${servicesHtml}
                </div>
                <div id="botInputSection" style="display:none; margin-top:16px; background:#1a1d24; border-radius:16px; padding:16px;">
                    <div style="font-weight:600; margin-bottom:8px;" id="selectedBotService"></div>
                    <div style="margin:12px 0;">
                        <label style="font-size:13px; color:#8e95a5; display:block; text-align:left; margin-bottom:6px;" id="inputLabel">Masukkan Link Grup WhatsApp:</label>
                        <input type="text" id="botInput" placeholder="Contoh: https://chat.whatsapp.com/xxxxx" style="width:100%; padding:12px; background:#0f1420; border:1px solid #2a2f38; border-radius:10px; color:white; font-size:14px;">
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:8px 4px; border-top:1px solid #2a2f38; margin-top:8px;">
                        <span style="color:#8e95a5; font-weight:600;">Total Harga</span>
                        <span id="botTotalPrice" style="color:#22d3ee; font-weight:800; font-size:20px;">Rp 0</span>
                    </div>
                    <button id="orderBotBtn" style="width:100%; margin-top:12px; padding:12px; background:#3b82f6; border:none; border-radius:40px; color:white; font-weight:700; font-size:16px; cursor:pointer;">Order</button>
                </div>
                <button class="modal-close" id="closeModalBtn">Tutup</button>
            </div>
        `;
        
        document.getElementById("closeModalBtn").onclick = () => {
            document.getElementById("paymentModal").classList.remove("open");
            document.getElementById("modalOverlay").classList.remove("active");
        };
        
        window.selectedBotIndex = null;
        window.selectedProduct = product;
        
        document.querySelectorAll('.service-option').forEach(el => {
            el.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                selectBotService(index);
            });
        });
        
        document.getElementById('orderBotBtn').addEventListener('click', function() {
            const product = window.selectedProduct;
            const index = window.selectedBotIndex;
            if (index === null) {
                showToast('Pilih layanan terlebih dahulu');
                return;
            }
            const service = product.services[index];
            const input = document.getElementById('botInput').value.trim();
            
            if (!input) {
                showToast('Masukkan link grup atau nomor terlebih dahulu');
                return;
            }
            
            const typeLabel = service.type === 'sewa' ? 'Link Grup' : 'Nomor';
            const orderData = {
                name: `${service.name} - BOT WA`,
                price: service.price,
                detail: `${service.name}\n${typeLabel}: ${input}`,
                total: service.price
            };
            
            document.getElementById("paymentModal").classList.remove("open");
            document.getElementById("modalOverlay").classList.remove("active");
            
            setTimeout(() => {
                showPaymentQR(orderData);
            }, 300);
        });
        
    } else if (product.isSosmed) {
        let servicesHtml = product.services.map((service, index) => `
            <div class="service-option" data-index="${index}" style="display:flex; justify-content:space-between; padding:14px 18px; background:#1a1d24; border-radius:14px; margin-bottom:10px; cursor:pointer; border:2px solid transparent; transition:all 0.2s;" onclick="selectSosmedService(${index})">
                <span style="font-weight:700; font-size:15px;">${service.name}</span>
                <span style="color:#22d3ee; font-weight:700;">Rp ${service.pricePerUnit.toLocaleString('id-ID')} / ${service.unit}</span>
            </div>
        `).join('');
        
        content.innerHTML = `
            <div style="text-align:center; padding: 0 10px;">
                <div style="font-size:20px; font-weight:700; margin-top:5px;">${product.name}</div>
                <div style="font-size:13px; color:#8e95a5; margin-bottom:16px;">Pilih layanan yang diinginkan:</div>
                <div id="serviceList">
                    ${servicesHtml}
                </div>
                <div id="quantitySection" style="display:none; margin-top:16px; background:#1a1d24; border-radius:16px; padding:16px;">
                    <div style="font-weight:600; margin-bottom:8px;" id="selectedServiceName"></div>
                    <div style="display:flex; align-items:center; gap:12px; justify-content:center; margin:12px 0;">
                        <button class="qty-minus-sosmed" style="background:#2a2f38; border:none; width:40px; height:40px; border-radius:20px; color:white; font-size:24px; cursor:pointer;">−</button>
                        <input type="number" id="qtyInput" value="" placeholder="0" style="width:100px; text-align:center; background:#0f1420; border:1px solid #2a2f38; border-radius:10px; padding:10px; color:white; font-size:18px; font-weight:700;">
                        <button class="qty-plus-sosmed" style="background:#2a2f38; border:none; width:40px; height:40px; border-radius:20px; color:white; font-size:24px; cursor:pointer;">+</button>
                    </div>
                    <div id="warningMessage" style="color:#f59e0b; font-size:12px; margin-bottom:8px; display:none;">⚠️ Minimal order ${product.services[0].minOrder}</div>
                    <div style="display:flex; justify-content:space-between; padding:8px 4px; border-top:1px solid #2a2f38; margin-top:8px;">
                        <span style="color:#8e95a5;">Minimal Order</span>
                        <span id="minOrderDisplay" style="font-weight:600;">${product.services[0].minOrder}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:8px 4px;">
                        <span style="color:#8e95a5; font-weight:600;">Total Harga</span>
                        <span id="totalPriceDisplay" style="color:#22d3ee; font-weight:800; font-size:20px;">Rp 0</span>
                    </div>
                    <button id="orderSosmedBtn" style="width:100%; margin-top:12px; padding:12px; background:#3b82f6; border:none; border-radius:40px; color:white; font-weight:700; font-size:16px; cursor:pointer;">Order</button>
                </div>
                <button class="modal-close" id="closeModalBtn">Tutup</button>
            </div>
        `;
        
        document.getElementById("closeModalBtn").onclick = () => {
            document.getElementById("paymentModal").classList.remove("open");
            document.getElementById("modalOverlay").classList.remove("active");
        };
        
        window.selectedServiceIndex = null;
        window.selectedProduct = product;
        
        document.querySelectorAll('.service-option').forEach(el => {
            el.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                selectSosmedService(index);
            });
        });
        
        document.querySelector('.qty-minus-sosmed').addEventListener('click', function() {
            const input = document.getElementById('qtyInput');
            let val = parseInt(input.value) || 0;
            if (val > 0) {
                input.value = val - 1;
                updateSosmedTotal();
            }
        });
        
        document.querySelector('.qty-plus-sosmed').addEventListener('click', function() {
            const input = document.getElementById('qtyInput');
            let val = parseInt(input.value) || 0;
            input.value = val + 1;
            updateSosmedTotal();
        });
        
        document.getElementById('qtyInput').addEventListener('input', function() {
            updateSosmedTotal();
        });
        
        document.getElementById('qtyInput').addEventListener('blur', function() {
            let val = parseInt(this.value) || 0;
            const min = parseInt(document.getElementById('minOrderDisplay').textContent);
            if (val > 0 && val < min) {
                document.getElementById('warningMessage').style.display = 'block';
            } else {
                document.getElementById('warningMessage').style.display = 'none';
            }
            updateSosmedTotal();
        });
        
        document.getElementById('orderSosmedBtn').addEventListener('click', function() {
            const product = window.selectedProduct;
            const index = window.selectedServiceIndex;
            if (index === null) {
                showToast('Pilih layanan terlebih dahulu');
                return;
            }
            const service = product.services[index];
            const qty = parseInt(document.getElementById('qtyInput').value);
            const min = parseInt(document.getElementById('minOrderDisplay').textContent);
            
            if (!qty || qty < min) {
                document.getElementById('warningMessage').style.display = 'block';
                showToast(`Minimal order ${min}`);
                return;
            }
            
            const total = Math.ceil(service.pricePerUnit * qty / service.unit);
            const orderData = {
                name: `${product.platform} ${service.name}`,
                qty: qty,
                total: total,
                detail: `Order ${product.platform} ${service.name} sebanyak ${qty}`
            };
            
            document.getElementById("paymentModal").classList.remove("open");
            document.getElementById("modalOverlay").classList.remove("active");
            
            setTimeout(() => {
                showPaymentQR(orderData);
            }, 300);
        });
        
    } else if (product.isRoblox || product.isPaketan) {
        let servicesHtml = product.services.map((service, index) => `
            <div class="service-option" data-index="${index}" style="display:flex; justify-content:space-between; padding:14px 18px; background:#1a1d24; border-radius:14px; margin-bottom:10px; cursor:pointer; border:2px solid transparent; transition:all 0.2s;" onclick="selectRobloxService(${index})">
                <span style="font-weight:700; font-size:15px;">${service.name}</span>
                <span style="color:#22d3ee; font-weight:700;">Rp ${(service.pricePerUnit || service.price).toLocaleString('id-ID')}</span>
            </div>
        `).join('');
        
        content.innerHTML = `
            <div style="text-align:center; padding: 0 10px;">
                <div style="font-size:20px; font-weight:700; margin-top:5px;">${product.name}</div>
                <div style="font-size:13px; color:#8e95a5; margin-bottom:16px;">${product.desc}</div>
                <div id="serviceList">
                    ${servicesHtml}
                </div>
                <div id="robloxSection" style="display:none; margin-top:16px; background:#1a1d24; border-radius:16px; padding:16px;">
                    <div style="font-weight:600; margin-bottom:8px;" id="selectedRobloxService"></div>
                    ${product.isPaketan ? `
                        <div style="font-size:12px; color:#8e95a5; margin-bottom:12px; text-align:left;" id="paketDetail"></div>
                    ` : `
                        <div style="margin:12px 0;">
                            <label style="font-size:13px; color:#8e95a5; display:block; text-align:left; margin-bottom:6px;">Jumlah:</label>
                            <div style="display:flex; align-items:center; gap:12px; justify-content:center;">
                                <button class="qty-minus-roblox" style="background:#2a2f38; border:none; width:40px; height:40px; border-radius:20px; color:white; font-size:24px; cursor:pointer;">−</button>
                                <input type="number" id="robloxQtyInput" value="" placeholder="0" style="width:100px; text-align:center; background:#0f1420; border:1px solid #2a2f38; border-radius:10px; padding:10px; color:white; font-size:18px; font-weight:700;">
                                <button class="qty-plus-roblox" style="background:#2a2f38; border:none; width:40px; height:40px; border-radius:20px; color:white; font-size:24px; cursor:pointer;">+</button>
                            </div>
                            <div id="robloxWarning" style="color:#f59e0b; font-size:12px; margin-top:8px; display:none;">⚠️ Minimal order <span id="robloxMinDisplay">0</span></div>
                        </div>
                    `}
                    <div style="margin:12px 0;">
                        <label style="font-size:13px; color:#8e95a5; display:block; text-align:left; margin-bottom:6px;">Username Roblox:</label>
                        <input type="text" id="robloxUsername" placeholder="Masukkan username Roblox" style="width:100%; padding:12px; background:#0f1420; border:1px solid #2a2f38; border-radius:10px; color:white; font-size:14px;">
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:8px 4px; border-top:1px solid #2a2f38; margin-top:8px;">
                        <span style="color:#8e95a5; font-weight:600;">Total Harga</span>
                        <span id="robloxTotalPrice" style="color:#22d3ee; font-weight:800; font-size:20px;">Rp 0</span>
                    </div>
                    <button id="orderRobloxBtn" style="width:100%; margin-top:12px; padding:12px; background:#3b82f6; border:none; border-radius:40px; color:white; font-weight:700; font-size:16px; cursor:pointer;">Order</button>
                </div>
                <button class="modal-close" id="closeModalBtn">Tutup</button>
            </div>
        `;
        
        document.getElementById("closeModalBtn").onclick = () => {
            document.getElementById("paymentModal").classList.remove("open");
            document.getElementById("modalOverlay").classList.remove("active");
        };
        
        window.selectedRobloxIndex = null;
        window.selectedProduct = product;
        
        document.querySelectorAll('.service-option').forEach(el => {
            el.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                selectRobloxService(index);
            });
        });
        
        if (!product.isPaketan) {
            document.querySelector('.qty-minus-roblox').addEventListener('click', function() {
                const input = document.getElementById('robloxQtyInput');
                let val = parseInt(input.value) || 0;
                if (val > 0) {
                    input.value = val - 1;
                    updateRobloxTotal();
                }
            });
            
            document.querySelector('.qty-plus-roblox').addEventListener('click', function() {
                const input = document.getElementById('robloxQtyInput');
                let val = parseInt(input.value) || 0;
                input.value = val + 1;
                updateRobloxTotal();
            });
            
            document.getElementById('robloxQtyInput').addEventListener('input', function() {
                updateRobloxTotal();
            });
            
            document.getElementById('robloxQtyInput').addEventListener('blur', function() {
                let val = parseInt(this.value) || 0;
                const min = parseInt(document.getElementById('robloxMinDisplay').textContent);
                if (val > 0 && val < min) {
                    document.getElementById('robloxWarning').style.display = 'block';
                } else {
                    document.getElementById('robloxWarning').style.display = 'none';
                }
                updateRobloxTotal();
            });
        }
        
        document.getElementById('orderRobloxBtn').addEventListener('click', function() {
            const product = window.selectedProduct;
            const index = window.selectedRobloxIndex;
            if (index === null) {
                showToast('Pilih item terlebih dahulu');
                return;
            }
            const service = product.services[index];
            const username = document.getElementById('robloxUsername').value.trim();
            
            if (!username) {
                showToast('Masukkan username Roblox');
                return;
            }
            
            let qty = 1;
            let total = service.price || 0;
            let detail = `${service.name}`;
            
            if (!product.isPaketan) {
                qty = parseInt(document.getElementById('robloxQtyInput').value) || 0;
                const min = parseInt(document.getElementById('robloxMinDisplay').textContent);
                if (!qty || qty < min) {
                    document.getElementById('robloxWarning').style.display = 'block';
                    showToast(`Minimal order ${min}`);
                    return;
                }
                total = service.pricePerUnit * qty;
                detail = `${service.name} x${qty}`;
            } else {
                detail = `${service.name}\n${service.detail || ''}`;
                total = service.price;
            }
            
            const orderData = {
                name: `${product.platform} - ${service.name}`,
                qty: qty,
                total: total,
                detail: `${detail}\nUsername: ${username}`
            };
            
            document.getElementById("paymentModal").classList.remove("open");
            document.getElementById("modalOverlay").classList.remove("active");
            
            setTimeout(() => {
                showPaymentQR(orderData);
            }, 300);
        });
        
    } else if (product.productList && product.productList.length > 0) {
        let listHtml = product.productList.map(item => `
            <div class="list-item" style="display:flex; justify-content:space-between; padding:12px 16px; background:#1a1d24; border-radius:12px; margin-bottom:8px; cursor:pointer; border:1px solid transparent; transition:all 0.2s;" 
                 onclick="selectProductFromList('${product.id}', '${item.name}', ${item.price})">
                <span style="font-weight:600;">${item.name}</span>
                <span style="color:#22d3ee; font-weight:700;">Rp ${item.price.toLocaleString('id-ID')}</span>
            </div>
        `).join('');
        
        content.innerHTML = `
            <div style="text-align:center; padding: 0 10px;">
                <div style="font-size:20px; font-weight:700; margin-top:5px;">${product.name}</div>
                <div style="font-size:13px; color:#8e95a5; margin-bottom:16px;">${product.desc}</div>
                <div style="margin:12px 0;">
                    ${listHtml}
                </div>
                <div class="payment-note" style="margin-top:12px;">
                    <i class="ri-alert-line"></i> Pilih salah satu di atas untuk lanjut pembayaran
                </div>
                <button class="modal-close" id="closeModalBtn">Tutup</button>
            </div>
        `;
        
        document.getElementById("closeModalBtn").onclick = () => {
            document.getElementById("paymentModal").classList.remove("open");
            document.getElementById("modalOverlay").classList.remove("active");
        };
        
    } else {
        content.innerHTML = `
            <div style="text-align:center; padding: 0 10px;">
                <img src="image/qris.png" class="qris-image" onerror="this.src='https://placehold.co/320x320?text=QRIS'">
                <div style="font-size:20px; font-weight:700; margin-top:10px;">${product.name}</div>
                <div style="font-size:28px; font-weight:800; color:#22d3ee; margin:12px 0;">Rp ${product.price.toLocaleString('id-ID')}</div>
                <div class="payment-note">
                    <i class="ri-alert-line"></i> WAJIB: Setelah transfer, kirim bukti screenshot ke admin untuk verifikasi.
                </div>
                <button class="btn-confirm" id="confirmWAButton">
                    <i class="ri-whatsapp-line"></i> Konfirmasi via WhatsApp
                </button>
                <button class="modal-close" id="closeModalBtn">Tutup</button>
            </div>
        `;
        
        document.getElementById("confirmWAButton").onclick = () => {
            const message = `Halo admin, saya ingin konfirmasi pembayaran untuk produk: ${product.name} dengan harga Rp ${product.price.toLocaleString('id-ID')}. Terima kasih.`;
            const url = `https://wa.me/${CONFIG.adminNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
            document.getElementById("paymentModal").classList.remove("open");
            document.getElementById("modalOverlay").classList.remove("active");
        };
        
        document.getElementById("closeModalBtn").onclick = () => {
            document.getElementById("paymentModal").classList.remove("open");
            document.getElementById("modalOverlay").classList.remove("active");
        };
    }
    
    modal.classList.add("open");
    document.getElementById("modalOverlay").classList.add("active");
}





function selectRobloxService(index) {
    window.selectedRobloxIndex = index;
    const product = window.selectedProduct;
    const service = product.services[index];
    
    document.querySelectorAll('.service-option').forEach((el, i) => {
        el.style.borderColor = i === index ? '#3b82f6' : 'transparent';
        el.style.background = i === index ? '#1e2a45' : '#1a1d24';
    });
    
    document.getElementById('robloxSection').style.display = 'block';
    document.getElementById('selectedRobloxService').textContent = service.name;
    
    if (product.isPaketan) {
        document.getElementById('paketDetail').textContent = service.detail || '';
        document.getElementById('robloxTotalPrice').textContent = `Rp ${service.price.toLocaleString('id-ID')}`;
        document.getElementById('robloxQtyInput').style.display = 'none';
        document.querySelector('.qty-minus-roblox').style.display = 'none';
        document.querySelector('.qty-plus-roblox').style.display = 'none';
        document.getElementById('robloxWarning').style.display = 'none';
    } else {
        document.getElementById('paketDetail').textContent = '';
        document.getElementById('robloxQtyInput').style.display = 'inline-block';
        document.querySelector('.qty-minus-roblox').style.display = 'inline-flex';
        document.querySelector('.qty-plus-roblox').style.display = 'inline-flex';
        document.getElementById('robloxMinDisplay').textContent = service.minOrder;
        document.getElementById('robloxQtyInput').value = '';
        document.getElementById('robloxQtyInput').placeholder = `Min ${service.minOrder}`;
        document.getElementById('robloxWarning').style.display = 'none';
        document.getElementById('robloxTotalPrice').textContent = 'Rp 0';
    }
    
    document.getElementById('robloxUsername').value = '';
}

function updateRobloxTotal() {
    const product = window.selectedProduct;
    const index = window.selectedRobloxIndex;
    if (index === null) return;
    const service = product.services[index];
    const qty = parseInt(document.getElementById('robloxQtyInput').value) || 0;
    const min = parseInt(document.getElementById('robloxMinDisplay').textContent);
    
    if (qty > 0 && qty < min) {
        document.getElementById('robloxWarning').style.display = 'block';
    } else {
        document.getElementById('robloxWarning').style.display = 'none';
    }
    
    if (qty > 0) {
        const total = service.pricePerUnit * qty;
        document.getElementById('robloxTotalPrice').textContent = `Rp ${total.toLocaleString('id-ID')}`;
    } else {
        document.getElementById('robloxTotalPrice').textContent = 'Rp 0';
    }
}




function showPaymentQR(orderData) {
    const modal = document.getElementById("paymentModal");
    const content = document.getElementById("paymentContent");
    
    content.innerHTML = `
        <div style="text-align:center; padding: 0 10px;">
            <img src="image/qris.png" class="qris-image" onerror="this.src='https://placehold.co/320x320?text=QRIS'">
            <div style="font-size:18px; font-weight:700; margin-top:10px;">${orderData.name}</div>
            ${orderData.qty ? `<div style="font-size:13px; color:#8e95a5; margin:4px 0;">Jumlah: ${orderData.qty}</div>` : ''}
            <div style="font-size:28px; font-weight:800; color:#22d3ee; margin:12px 0;">Rp ${orderData.total.toLocaleString('id-ID')}</div>
            <div class="payment-note">
                <i class="ri-alert-line"></i> WAJIB: Setelah transfer, kirim bukti screenshot ke admin untuk verifikasi.
            </div>
            <button class="btn-confirm" id="confirmWAButton">
                <i class="ri-whatsapp-line"></i> Konfirmasi via WhatsApp
            </button>
            <button class="modal-close" id="closeQRBtn">Tutup</button>
        </div>
    `;
    
    modal.classList.add("open");
    document.getElementById("modalOverlay").classList.add("active");
    
    document.getElementById("confirmWAButton").onclick = () => {
        const message = `Halo admin, saya ingin konfirmasi pembayaran untuk: ${orderData.detail} dengan total Rp ${orderData.total.toLocaleString('id-ID')}. Terima kasih.`;
        const url = `https://wa.me/${CONFIG.adminNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        document.getElementById("paymentModal").classList.remove("open");
        document.getElementById("modalOverlay").classList.remove("active");
    };
    
    document.getElementById("closeQRBtn").onclick = () => {
        document.getElementById("paymentModal").classList.remove("open");
        document.getElementById("modalOverlay").classList.remove("active");
    };
}




function selectBotService(index) {
    window.selectedBotIndex = index;
    const product = window.selectedProduct;
    const service = product.services[index];
    
    document.querySelectorAll('.service-option').forEach((el, i) => {
        el.style.borderColor = i === index ? '#3b82f6' : 'transparent';
        el.style.background = i === index ? '#1e2a45' : '#1a1d24';
    });
    
    document.getElementById('botInputSection').style.display = 'block';
    document.getElementById('selectedBotService').textContent = `${service.name}`;
    document.getElementById('botTotalPrice').textContent = `Rp ${service.price.toLocaleString('id-ID')}`;
    
    if (service.type === 'sewa') {
        document.getElementById('inputLabel').textContent = 'Masukkan Link Grup WhatsApp:';
        document.getElementById('botInput').placeholder = 'Contoh: https://chat.whatsapp.com/xxxxx';
    } else {
        document.getElementById('inputLabel').textContent = 'Masukkan Nomor WhatsApp yang Mau Dijadikan Bot:';
        document.getElementById('botInput').placeholder = 'Contoh: 6281234567890';
    }
    document.getElementById('botInput').value = '';
}







function selectSosmedService(index) {
    window.selectedServiceIndex = index;
    const product = window.selectedProduct;
    const service = product.services[index];
    
    document.querySelectorAll('.service-option').forEach((el, i) => {
        el.style.borderColor = i === index ? '#3b82f6' : 'transparent';
        el.style.background = i === index ? '#1e2a45' : '#1a1d24';
    });
    
    document.getElementById('quantitySection').style.display = 'block';
    document.getElementById('selectedServiceName').textContent = `${product.platform} ${service.name}`;
    document.getElementById('minOrderDisplay').textContent = service.minOrder;
    document.getElementById('qtyInput').value = '';
    document.getElementById('qtyInput').placeholder = `Min ${service.minOrder}`;
    document.getElementById('warningMessage').style.display = 'none';
    document.getElementById('totalPriceDisplay').textContent = 'Rp 0';
}

function updateSosmedTotal() {
    const product = window.selectedProduct;
    const index = window.selectedServiceIndex;
    if (index === null) return;
    const service = product.services[index];
    const qty = parseInt(document.getElementById('qtyInput').value) || 0;
    const min = parseInt(document.getElementById('minOrderDisplay').textContent);
    
    if (qty > 0 && qty < min) {
        document.getElementById('warningMessage').style.display = 'block';
    } else {
        document.getElementById('warningMessage').style.display = 'none';
    }
    
    if (qty > 0) {
        const total = Math.ceil(service.pricePerUnit * qty / service.unit);
        document.getElementById('totalPriceDisplay').textContent = `Rp ${total.toLocaleString('id-ID')}`;
    } else {
        document.getElementById('totalPriceDisplay').textContent = 'Rp 0';
    }
}







function selectProductFromList(productId, itemName, itemPrice) {
    document.getElementById("paymentModal").classList.remove("open");
    document.getElementById("modalOverlay").classList.remove("active");
    
    const selectedProduct = {
        id: productId + '_' + itemName,
        name: itemName,
        price: itemPrice,
        image: "image/produk/produk1.jpg"
    };
    
    setTimeout(() => {
        showPaymentDirect(selectedProduct);
    }, 300);
}

function showPaymentDirect(product) {
    currentProduct = product;
    const modal = document.getElementById("paymentModal");
    const content = document.getElementById("paymentContent");
    
    content.innerHTML = `
        <div style="text-align:center; padding: 0 10px;">
            <img src="image/qris.png" class="qris-image" onerror="this.src='https://placehold.co/320x320?text=QRIS'">
            <div style="font-size:20px; font-weight:700; margin-top:10px;">${product.name}</div>
            <div style="font-size:28px; font-weight:800; color:#22d3ee; margin:12px 0;">Rp ${product.price.toLocaleString('id-ID')}</div>
            <div class="payment-note">
                <i class="ri-alert-line"></i> WAJIB: Setelah transfer, kirim bukti screenshot ke admin untuk verifikasi.
            </div>
            <button class="btn-confirm" id="confirmWAButton">
                <i class="ri-whatsapp-line"></i> Konfirmasi via WhatsApp
            </button>
        </div>
    `;
    
    modal.classList.add("open");
    document.getElementById("modalOverlay").classList.add("active");
    
    document.getElementById("confirmWAButton").onclick = () => {
        const message = `Halo admin, saya ingin konfirmasi pembayaran untuk produk: ${product.name} dengan harga Rp ${product.price.toLocaleString('id-ID')}. Terima kasih.`;
        const url = `https://wa.me/${CONFIG.adminNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };
}







function closePayment() {
    document.getElementById("paymentModal").classList.remove("open");
    document.getElementById("modalOverlay").classList.remove("active");
}


function showCart() {
    console.log("showCart jalan!");
    const main = document.getElementById("mainContent");
    if (cart.length === 0) {
        main.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; text-align: center;">
                <i class="ri-shopping-cart-line" style="font-size: 80px; color: #8e95a5; margin-bottom: 20px;"></i>
                <p style="font-size: 16px; color: #8e95a5; margin-bottom: 24px;">Keranjang kosong</p>
                <button id="btnBackToShop" style="width: 200px; padding: 12px 24px; background: var(--accent); border: none; border-radius: 40px; color: white; font-weight: 600; cursor: pointer;">Kembali Belanja</button>
            </div>
        `;
        const backBtn = document.getElementById("btnBackToShop");
        if (backBtn) {
            backBtn.onclick = function(e) {
                e.stopPropagation();
                renderHome();
            };
        }
        return;
    }
    
    const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    main.innerHTML = `
        <div style="padding:20px 0;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
                <i class="ri-arrow-left-line" id="backHomeFromCart" style="font-size:24px; cursor:pointer;"></i>
                <h2 style="font-size:20px;">Keranjang Belanja</h2>
            </div>
            <div class="cart-items">
                ${cart.map(item => `
                    <div class="cart-item">
                        <div><strong>${item.name}</strong><br><small>Rp ${item.price.toLocaleString('id-ID')}</small></div>
                        <div style="display:flex; align-items:center; gap:12px;">
                            <button class="cart-qty-minus" data-id="${item.id}" style="background:#2a2f38; border:none; width:32px; height:32px; border-radius:16px; cursor:pointer; font-size:16px; color:white;">-</button>
                            <span style="min-width:24px; text-align:center;">${item.qty}</span>
                            <button class="cart-qty-plus" data-id="${item.id}" style="background:#2a2f38; border:none; width:32px; height:32px; border-radius:16px; cursor:pointer; font-size:16px; color:white;">+</button>
                            <button class="cart-remove" data-id="${item.id}" style="background:#dc2626; border:none; width:32px; height:32px; border-radius:16px; cursor:pointer; color:white;"><i class="ri-delete-bin-line"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="cart-total">Total: Rp ${total.toLocaleString('id-ID')}</div>
            <button class="btn-buy" id="checkoutFromCart" style="width:100%; padding:14px;">Checkout Semua</button>
            <button id="backToShopBtn" style="width:100%; padding:14px; margin-top:12px; background:var(--bg-elevated); border:1px solid var(--border); border-radius:40px; color:white; cursor:pointer;">Kembali Belanja</button>
        </div>
    `;
    
    document.getElementById("backHomeFromCart")?.addEventListener("click", () => renderHome());
    document.getElementById("backToShopBtn")?.addEventListener("click", () => renderHome());
    
    document.querySelectorAll(".cart-qty-minus").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const item = cart.find(i => i.id === id);
            if (item.qty > 1) item.qty--;
            else cart = cart.filter(i => i.id !== id);
            updateCartCount();
            showCart();
        });
    });
    
    document.querySelectorAll(".cart-qty-plus").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const item = cart.find(i => i.id === id);
            item.qty++;
            updateCartCount();
            showCart();
        });
    });
    
    document.querySelectorAll(".cart-remove").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            cart = cart.filter(i => i.id !== id);
            updateCartCount();
            showCart();
        });
    });
    
    document.getElementById("checkoutFromCart")?.addEventListener("click", () => {
        const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
        const productList = cart.map(i => `${i.name} x${i.qty}`).join(", ");
        
        const modal = document.getElementById("paymentModal");
        const content = document.getElementById("paymentContent");
        content.innerHTML = `
            <div style="text-align:center; padding: 0 10px;">
                <img src="image/qris.png" class="qris-image" onerror="this.src='https://placehold.co/320x320?text=QRIS'">
                <div style="font-size:18px; font-weight:700; margin-top:10px;">Checkout Keranjang</div>
                <div style="font-size:13px; color:#8e95a5; margin:8px 0; word-break:break-word;">${productList}</div>
                <div style="font-size:28px; font-weight:800; color:#22d3ee; margin:12px 0;">Rp ${totalPrice.toLocaleString('id-ID')}</div>
                <div class="payment-note">
                    <i class="ri-alert-line"></i> WAJIB: Setelah transfer, kirim bukti screenshot ke admin untuk verifikasi.
                </div>
                <button class="btn-confirm" id="confirmCheckoutWAButton">
                    <i class="ri-whatsapp-line"></i> Konfirmasi via WhatsApp
                </button>
            </div>
        `;
        modal.classList.add("open");
        document.getElementById("modalOverlay").classList.add("active");
        
        document.getElementById("confirmCheckoutWAButton").onclick = () => {
            const message = `Halo admin, saya ingin checkout: ${productList} dengan total Rp ${totalPrice.toLocaleString('id-ID')}. Mohon panduan pembayaran.`;
            window.open(`https://wa.me/${CONFIG.adminNumber}?text=${encodeURIComponent(message)}`, "_blank");
            document.getElementById("paymentModal").classList.remove("open");
            document.getElementById("modalOverlay").classList.remove("active");
            cart = [];
            updateCartCount();
            renderHome();
            showToast("Checkout berhasil, terima kasih!");
        };
    });
}



function showGuide() {
    const main = document.getElementById("mainContent");
    main.innerHTML = `
        <div style="padding:20px 0;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:24px;">
                <i class="ri-arrow-left-line" id="backHomeGuide" style="font-size:24px; cursor:pointer;"></i>
                <h2 style="font-size:20px;">Panduan Belanja</h2>
            </div>
            <div style="background:#1a1d24; border-radius:24px; padding:24px;">
                <div style="margin-bottom:20px;"><span style="background:#06b6d4; width:28px; height:28px; display:inline-flex; align-items:center; justify-content:center; border-radius:14px; margin-right:12px;">1</span> Pilih produk yang ingin dibeli</div>
                <div style="margin-bottom:20px;"><span style="background:#06b6d4; width:28px; height:28px; display:inline-flex; align-items:center; justify-content:center; border-radius:14px; margin-right:12px;">2</span> Klik "Beli Sekarang" atau tambah ke keranjang</div>
                <div style="margin-bottom:20px;"><span style="background:#06b6d4; width:28px; height:28px; display:inline-flex; align-items:center; justify-content:center; border-radius:14px; margin-right:12px;">3</span> Scan QRIS dan lakukan pembayaran sesuai nominal</div>
                <div style="margin-bottom:20px;"><span style="background:#06b6d4; width:28px; height:28px; display:inline-flex; align-items:center; justify-content:center; border-radius:14px; margin-right:12px;">4</span> Klik "Konfirmasi via WhatsApp" dan kirim bukti transfer</div>
                <div><span style="background:#06b6d4; width:28px; height:28px; display:inline-flex; align-items:center; justify-content:center; border-radius:14px; margin-right:12px;">5</span> Produk akan dikirim dalam 2-15 menit setelah verifikasi</div>
            </div>
        </div>
    `;
    document.getElementById("backHomeGuide")?.addEventListener("click", () => renderHome());
}



function renderHome() {
    const main = document.getElementById("mainContent");
    main.innerHTML = `
        <div class="profile-section">
            <img src="${CONFIG.avatar}" class="profile-avatar" onerror="this.src='image/logo/logo.jpg'">
            <div class="profile-info">
                <h2>${CONFIG.storeName}</h2>
                <p><span class="status-badge"></span> Aman & Terpercaya</p>
                <div class="social-links">
                    <a href="${CONFIG.instagram}" target="_blank" class="social-icon"><i class="ri-instagram-line"></i></a>
                    <a href="${CONFIG.telegram}" target="_blank" class="social-icon"><i class="ri-telegram-line"></i></a>
                    <a href="https://wa.me/${CONFIG.whatsappNumber}" target="_blank" class="social-icon"><i class="ri-whatsapp-line"></i></a>
                </div>
            </div>
        </div>
        <div class="banner-slider" id="bannerSlider"></div>
        <div class="cs-button" onclick="window.open('https://wa.me/${CONFIG.whatsappNumber}', '_blank')">
            <img src="image/service.jpg" alt="CS" onerror="this.src='image/logo/logo.jpg'">
            <span>Customer Service</span>
            <i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="marquee">
            <div class="marquee-text">PROMO SPESIAL DISKON 15% PEMBELIAN PERTAMA  20.000 GARANSI 100 AMAN   LAYANAN ONLINE 24 JAM   HUBUNGI ADMIN JIKA ADA KENDALA</div>
        </div>
        <div class="section-title"><i class="ri-shopping-bag-3-line"></i> Produk Kami</div>
        <div class="products-grid" id="productsGrid"></div>
        <div class="feature-grid">
            <div class="feature-item"><i class="ri-flashlight-line feature-icon"></i><div class="feature-text"><h5>Proses Cepat</h5><p>2-5 menit</p></div></div>
            <div class="feature-item"><i class="ri-shield-check-line feature-icon"></i><div class="feature-text"><h5>Garansi 100</h5><p>Refund jika gagal</p></div></div>
            <div class="feature-item"><i class="ri-customer-service-2-line feature-icon"></i><div class="feature-text"><h5>Support 24/7</h5><p>Admin siap bantu</p></div></div>
        </div>
        <div class="promo-card"><h4>PROMO CASHBACK 10</h4><p>Khusus pengguna baru transaksi pertama</p><i class="ri-discount-line promo-deco"></i></div>
    `;

    const grid = document.getElementById("productsGrid");
    grid.innerHTML = products.map(p => {
        let priceDisplay = p.price;
        if (typeof p.price === 'number') {
            priceDisplay = 'Rp ' + p.price.toLocaleString('id-ID');
        }
        return `
            <div class="product-card" data-id="${p.id}">
                <img src="${p.image}" class="product-image" onerror="this.src='image/logo/logo.jpg'">
                <div class="product-title">${p.name}</div>
                <div class="product-price">${priceDisplay}</div>
                <div class="product-actions">
                    <button class="btn-buy" data-id="${p.id}">Beli</button>
                    <button class="btn-cart" data-id="${p.id}"><i class="ri-add-line"></i> Keranjang</button>
                </div>
            </div>
        `;
    }).join("");

    const gridClone = grid.cloneNode(true);
    grid.parentNode.replaceChild(gridClone, grid);

    gridClone.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("btn-buy") || e.target.classList.contains("btn-cart")) return;
            const id = parseInt(card.dataset.id);
            const product = products.find(p => p.id === id);
            if (product) showProductDetail(product);
        });
    });

    gridClone.querySelectorAll(".btn-buy").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            if (product) showPayment(product);
        });
    });

    gridClone.querySelectorAll(".btn-cart").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            if (product) addToCart(product);
        });
    });

    initBanner();
}





function initMenu() {
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("menuSidebar");
    const overlay = document.getElementById("modalOverlay");
    const closeMenu = document.getElementById("closeMenu");
    
    function openMenu() {
        sidebar.classList.add("open");
        overlay.classList.add("active");
    }
    
    function closeMenuPanel() {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
    }
    
    menuBtn.addEventListener("click", openMenu);
    closeMenu.addEventListener("click", closeMenuPanel);
    overlay.addEventListener("click", closeMenuPanel);
    
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", () => {
            const nav = item.dataset.nav;
            if (nav === "home") renderHome();
            else if (nav === "cart") showCart();
            else if (nav === "guide") showGuide();
            closeMenuPanel();
            document.getElementById("storeNameHeader").innerText = CONFIG.storeName;
        });
    });
}


function initModals() {
    console.log("initModals dipanggil");
    
    document.getElementById("closeDetail").addEventListener("click", closeDetail);
    document.getElementById("closePayment").addEventListener("click", closePayment);
    
    const cartBadge = document.getElementById("cartBadge");
    console.log("cartBadge:", cartBadge);
    
    if (cartBadge) {
        cartBadge.onclick = function(e) {
            console.log("cartBadge DIKLIK!");
            e.stopPropagation();
            e.preventDefault();
            showCart();
        };
    } else {
        console.log("ERROR: cartBadge ga ketemu!");
    }
}



document.getElementById("storeNameHeader").innerText = CONFIG.storeName;
renderHome();
initMenu();
initModals();
updateCartCount();