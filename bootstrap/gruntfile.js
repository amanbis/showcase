module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'_/js/main.js': ['_/components/js/main.js']
				} //files
			} //my_target
		} //uglify
	}) //initConfig
} //exports