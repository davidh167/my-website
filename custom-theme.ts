
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #23CE6B 
		"--color-primary-50": "222 248 233", // #def8e9
		"--color-primary-100": "211 245 225", // #d3f5e1
		"--color-primary-200": "200 243 218", // #c8f3da
		"--color-primary-300": "167 235 196", // #a7ebc4
		"--color-primary-400": "101 221 151", // #65dd97
		"--color-primary-500": "35 206 107", // #23CE6B
		"--color-primary-600": "32 185 96", // #20b960
		"--color-primary-700": "26 155 80", // #1a9b50
		"--color-primary-800": "21 124 64", // #157c40
		"--color-primary-900": "17 101 52", // #116534
		// secondary | #DA3E52 
		"--color-secondary-50": "249 226 229", // #f9e2e5
		"--color-secondary-100": "248 216 220", // #f8d8dc
		"--color-secondary-200": "246 207 212", // #f6cfd4
		"--color-secondary-300": "240 178 186", // #f0b2ba
		"--color-secondary-400": "229 120 134", // #e57886
		"--color-secondary-500": "218 62 82", // #DA3E52
		"--color-secondary-600": "196 56 74", // #c4384a
		"--color-secondary-700": "164 47 62", // #a42f3e
		"--color-secondary-800": "131 37 49", // #832531
		"--color-secondary-900": "107 30 40", // #6b1e28
		// tertiary | #37718E 
		"--color-tertiary-50": "225 234 238", // #e1eaee
		"--color-tertiary-100": "215 227 232", // #d7e3e8
		"--color-tertiary-200": "205 220 227", // #cddce3
		"--color-tertiary-300": "175 198 210", // #afc6d2
		"--color-tertiary-400": "115 156 176", // #739cb0
		"--color-tertiary-500": "55 113 142", // #37718E
		"--color-tertiary-600": "50 102 128", // #326680
		"--color-tertiary-700": "41 85 107", // #29556b
		"--color-tertiary-800": "33 68 85", // #214455
		"--color-tertiary-900": "27 55 70", // #1b3746
		// success | #62bde4 
		"--color-success-50": "231 245 251", // #e7f5fb
		"--color-success-100": "224 242 250", // #e0f2fa
		"--color-success-200": "216 239 248", // #d8eff8
		"--color-success-300": "192 229 244", // #c0e5f4
		"--color-success-400": "145 209 236", // #91d1ec
		"--color-success-500": "98 189 228", // #62bde4
		"--color-success-600": "88 170 205", // #58aacd
		"--color-success-700": "74 142 171", // #4a8eab
		"--color-success-800": "59 113 137", // #3b7189
		"--color-success-900": "48 93 112", // #305d70
		// warning | #e4a862 
		"--color-warning-50": "251 242 231", // #fbf2e7
		"--color-warning-100": "250 238 224", // #faeee0
		"--color-warning-200": "248 233 216", // #f8e9d8
		"--color-warning-300": "244 220 192", // #f4dcc0
		"--color-warning-400": "236 194 145", // #ecc291
		"--color-warning-500": "228 168 98", // #e4a862
		"--color-warning-600": "205 151 88", // #cd9758
		"--color-warning-700": "171 126 74", // #ab7e4a
		"--color-warning-800": "137 101 59", // #89653b
		"--color-warning-900": "112 82 48", // #705230
		// error | #d21414 
		"--color-error-50": "248 220 220", // #f8dcdc
		"--color-error-100": "246 208 208", // #f6d0d0
		"--color-error-200": "244 196 196", // #f4c4c4
		"--color-error-300": "237 161 161", // #eda1a1
		"--color-error-400": "224 91 91", // #e05b5b
		"--color-error-500": "210 20 20", // #d21414
		"--color-error-600": "189 18 18", // #bd1212
		"--color-error-700": "158 15 15", // #9e0f0f
		"--color-error-800": "126 12 12", // #7e0c0c
		"--color-error-900": "103 10 10", // #670a0a
		// surface | #382A3C 
		"--color-surface-50": "225 223 226", // #e1dfe2
		"--color-surface-100": "215 212 216", // #d7d4d8
		"--color-surface-200": "205 202 206", // #cdcace
		"--color-surface-300": "175 170 177", // #afaab1
		"--color-surface-400": "116 106 119", // #746a77
		"--color-surface-500": "56 42 60", // #382A3C
		"--color-surface-600": "50 38 54", // #322636
		"--color-surface-700": "42 32 45", // #2a202d
		"--color-surface-800": "34 25 36", // #221924
		"--color-surface-900": "27 21 29", // #1b151d
		
	}
}