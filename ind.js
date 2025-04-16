function vv(input)
        {
            input.value =input.value.replace(/[^0-9]/g,'')
        }
        document.addEventListener('DOMContentLoaded', function() {
            // التحقق مما إذا كان المستخدم قد أرسل البيانات من قبل
            const hasSubmitted = localStorage.getItem('formSubmitted');
            
            if (hasSubmitted) {
                // إذا كان قد أرسل من قبل، نعرض زر تسجيل الدخول ونخفي النموذج
                document.getElementById('loginForm').classList.add('hidden');
                document.getElementById('loginButtonContainer').classList.remove('hidden');
            } else {
                // إذا كان أول زيارة، نعرض النموذج ونخفي زر تسجيل الدخول
                document.getElementById('loginForm').classList.remove('hidden');
                document.getElementById('loginButtonContainer').classList.add('hidden');
            }
        });

        function sendToWhatsApp() {
            const name = document.getElementById('nameInput').value;
            const phone = document.getElementById('phoneInput').value;
            
            if (name && phone) {
                // استبدل هذا الرقم برقم الهاتف الذي تريد استقبال الرسائل عليه
                const whatsappNumber = "775458250"; // رقم واتساب الهدف (بدون + أو 00)
                
                // نص الرسالة
                const message = `تم تسجيل دخول جديد:%0A%0Aالاسم: ${encodeURIComponent(name)}%0Aرقم الجوال: ${encodeURIComponent(phone)}`;
                
                // إنشاء رابط واتساب
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
                
                // فتح الرابط في نافذة جديدة
                window.open(whatsappUrl, '_blank');
                
                // حفظ حالة الإرسال في localStorage
                localStorage.setItem('formSubmitted', 'true');
                
                // إخفاء النموذج وإظهار زر تسجيل الدخول
                document.getElementById('loginForm').classList.add('hidden');
                document.getElementById('loginButtonContainer').classList.remove('hidden');
            } else {
                alert('يرجى ملء جميع الحقول');
            }
        }