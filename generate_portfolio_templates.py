import os

# define the list of pages
pages = ['Brandingportfolio', 'ARportfolio', 'VRportfolio', 'Logoportfolio', 'visualartportfolio', 'Typographyportfolio', 'PostersPortfolio', '360Galleryportfolio', 'Motiondesignportfolio', 'VFXportfolio', 'CGIportfolio', 'Fractalartportfolio', 'Illustrationsportfolio', 'Packagingdesignportfolio', 'Merchandiseportfolio', 'storeportfolio', 'tutorialsportfolio', 'blogportfolio', 'writingportfolio', 'poetryportfolio', 'Musicportfolio']

# loop through the list and create the files
for page in pages:
    filename = page + '.html'
    with open(filename, 'w') as f:
        f.write('<!DOCTYPE html>\n')
        f.write('<html>\n')
        f.write('<head>\n')
        f.write('<title>' + page + '</title>\n')
        f.write('</head>\n')
        f.write('<body>\n')
        f.write('<h1>' + page + '</h1>\n')
        f.write('</body>\n')
        f.write('</html>\n')
    print('Created file:', filename)

# check if files were created
print(os.listdir())
