# redux with javascript

### রিডাক্স কি ? এবং কেনো প্রয়োজন।

রিডাক্স মূলত একটি জাভাস্ক্রিপ্ট ছোট লাইব্রেরী। যার সাহায্যে আমরা অনেক গুলো স্টেট কে অ্যাপের মধ্যে গ্লোবালী ম্যানেজ করতে পারি। আমরা বুঝতে পারি স্টেট গুলো অ্যাপের মধ্যে কিভাবে কাজ করছে। এবং 
অ্যাপের যেকোনো যায়গায় আমরা রিডেক্স এর স্টোর থেকে এক্সেস নিতে পারি।


### প্রতিটি স্ক্রিপ্ট ফাইলে যা করা হয়েছে তার বিবরন নিচে দেওয়া হলো। 

#### 🚀 basic.js 

এখানে চেষ্টা করেছি একটি ব্যসিক রিডাক্স এর ব্যবহার করতে। যেখানে একটি কাউন্ট স্টেট এর ভ্যালু বাড়ানো
কমানো করা। এর মাধ্যমে বুঝতে পেরেছি একটি স্টেট কে রিডাক্স এর সাহায্যে ম্যানেজ করতে হলে কোন কোন
প্রসিডিউর গুলো ফলো করতে হবে এবং তাদের কাজ গুলো তারা কিভাবে সম্পন্ন করতেছে। 

#### 🚀 multireducer / index.js

রিডাক্স এর স্টোর এ একটি মাত্র রিডিউসার পাস করানো যায়। কিন্তু আমাদের অনেক রিডিউসার থাকে যেগুলো ম্যানেজ করার জন্য একটি রুট রিডিউসার এ সব গুলোকে কম্বাইন্ড করে, তারপর রুট রিডিউসার কে স্টোর এ পাস করানো হয়। 
