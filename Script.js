(function(){
const reviews=[
  {user:"Mr. Rumon", msg:"সেবা খুব ভালো! এখানে অনেক সুবিধা পেলাম।", avatar:"https://i.pravatar.cc/50?img=1"},
  {user:"Md. Rakinul", msg:"গ্রুপগুলো বেশ আকর্ষণীয় এবং নিরাপদ।", avatar:"https://i.pravatar.cc/50?img=2"},
  {user:"Masum", msg:"আমি নতুন সদস্য, কিন্তু সব কিছু সহজে বুঝতে পারলাম।", avatar:"https://i.pravatar.cc/50?img=3"},
  {user:"Rakib lislam", msg:"অফারগুলো সত্যিই দারুন।", avatar:"https://i.pravatar.cc/50?img=4"},
  {user:"Monika", msg:"মোবাইল থেকে সব কাজ খুব সহজ।", avatar:"https://i.pravatar.cc/50?img=5"}
];

const slide2Data=[
  {name:"প্রিমিয়াম সেল 💎", note:"আগে দাম বেশি ছিল, এখন কম!", price:150},
  {name:"ফ্ল্যাশ ডিল 🔥", note:"সীমিত সময়ের ডিসকাউন্ট", price:120},
  {name:"ফ্রেশ অফার 🎯", note:"নতুন কন্টেন্ট ও সেভিংস", price:80}
];

function show(id){
  document.getElementById('mainInterface').style.display='none';
  ['slide1','slide2','paymentSlide','successSlide'].forEach(x=>document.getElementById(x).style.display='none');
  document.getElementById(id).style.display='block';
}

function populateReviews(container){
  container.innerHTML='';
  reviews.forEach(r=>{
    const div=document.createElement('div');
    div.className='groupItem';
    div.innerHTML=`<img src="${r.avatar}" class="reviewAvatar"><div class="groupInfo"><b>${r.user}</b><div class="smallNote">${r.msg}</div></div>`;
    container.appendChild(div);
  });
}

function populateSlide(container,data){
  container.innerHTML='';
  data.forEach(item=>{
    const div=document.createElement('div');
    div.className='groupItem';
    div.innerHTML=`<div class="groupInfo"><div style="font-weight:700;">${item.name} <span class="priceTag">💲${item.price}</span></div><div class="smallNote">${item.note}</div></div>
    <div class="actionBtns"><button class="btn btn-primary buyBtn">💸 Buy Now</button><button class="btn btn-pink demoBtn">🛒 Demo</button></div>`;
    container.appendChild(div);

    div.querySelector('.buyBtn').addEventListener('click',function(){
      document.getElementById('payGroupName').innerText=item.name;
      document.getElementById('payGroupPrice').innerText=item.price;
      document.getElementById('pay_name').value=item.name;
      document.getElementById('pay_amount').value=item.price;
      show('paymentSlide');
    });

    div.querySelector('.demoBtn').addEventListener('click',function(){
      alert('Demo: '+item.name);
    });
  });
}

// Button events
document.getElementById('btn1').addEventListener('click',function(){
  populateReviews(document.getElementById('slide1Content'));
  show('slide1');
});

document.getElementById('btn2').addEventListener('click',function(){
  const container=document.getElementById('slide2Content');
  populateSlide(container,slide2Data);
  const searchInput=document.getElementById('searchInput');
  searchInput.value='';
  searchInput.addEventListener('input',function(){
    const q=this.value.toLowerCase();
    const filtered=slide2Data.filter(item=>item.name.toLowerCase().includes(q)||item.note.toLowerCase().includes(q));
    populateSlide(container,filtered);
  });
  show('slide2');
});

// Back buttons
['back1','back2','backPayment','backSuccess'].forEach(id=>{
  document.getElementById(id).addEventListener('click',()=>show('mainInterface'));
});

// Payment form submit
document.getElementById('paymentForm').addEventListener('submit',function(e){
  e.preventDefault();
  show('successSlide');
});

show('mainInterface');
})();
