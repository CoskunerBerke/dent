<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

// --- YAPILANDIRMA ---
// Hakan Bey'in web sitesinin kurumsal e-posta adresi (gönderen adresi)
$gonderen_mail = "info@dthakansaylam.com"; 

// Bildirimlerin gideceği yardımcının e-posta adresi (alıcı adresi)
$alici_mail = "yardimci@dthakansaylam.com"; 
// --------------------

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini al ve temizle
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = strip_tags(trim($_POST["message"]));

    if (empty($name) || empty($phone)) {
        echo json_encode(["status" => "error", "message" => "Lütfen ad soyad ve telefon alanlarını doldurun."]);
        exit;
    }

    // E-posta Konusu
    $mail_konu = "Yeni Randevu Talebi: " . $name;
    
    // E-posta İçeriği (HTML formatında)
    $mail_icerik = "
    <html>
    <head>
        <title>Yeni Randevu Talebi</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; max-width: 600px; margin: 0 auto; }
            h2 { color: #C9A84C; border-bottom: 2px solid #C9A84C; padding-bottom: 10px; margin-top: 0; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; }
            td { padding: 10px; border-bottom: 1px solid #eee; }
            .label { font-weight: bold; width: 150px; color: #555; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>Web Sitesi Randevu Talebi</h2>
            <p><strong>www.dthakansaylam.com</strong> üzerinden yeni bir randevu talebi gönderildi. Detaylar aşağıdadır:</p>
            <table>
                <tr><td class='label'>Ad Soyad:</td><td>{$name}</td></tr>
                <tr><td class='label'>Telefon:</td><td>{$phone}</td></tr>
                <tr><td class='label'>E-posta:</td><td>" . ($email ? $email : 'Belirtilmedi') . "</td></tr>
                <tr><td class='label'>Tedavi Türü:</td><td>" . ($subject ? $subject : 'Belirtilmedi') . "</td></tr>
                <tr><td class='label'>Mesaj:</td><td>" . ($message ? nl2br($message) : 'Belirtilmedi') . "</td></tr>
            </table>
        </div>
    </body>
    </html>
    ";

    // E-posta Başlıkları (Headers)
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Hakan Saylam Web Sitesi <" . $gonderen_mail . ">" . "\r\n";
    if (!empty($email)) {
        $headers .= "Reply-To: " . $email . "\r\n";
    }

    // Mail Gönderimi
    if (mail($alici_mail, $mail_konu, $mail_icerik, $headers)) {
        echo json_encode(["status" => "success", "message" => "Randevu talebiniz başarıyla iletildi."]);
    } else {
        echo json_encode(["status" => "error", "message" => "E-posta gönderilirken bir sunucu hatası oluştu."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Geçersiz istek metodu."]);
}
?>
