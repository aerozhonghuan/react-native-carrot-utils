
Pod::Spec.new do |s|
  s.name         = "RNCarrotUtils"
  s.version      = "1.0.0"
  s.summary      = "RNCarrotUtils"
  s.description  = <<-DESC
                  RNCarrotUtils
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNCarrotUtils.git", :tag => "master" }
  s.source_files  = "RNCarrotUtils/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  